import { fetchAnswer, fetchFunFacts, fetchNewQuestion, fetchRandomDestinations } from "../repository/productRepository.js";
import { addIntoAskedQuestion, addScore, fetchAskedQuestionIds } from "../repository/userRepository.js";


export const fetchRandomQuestionService = async (userId) => {
    // Validate userId input
    if (!userId || userId.trim() === "") {
        throw new Error("userId is required.");
    }

    try {
        const askedQuestionIds = await fetchAskedQuestionIds(userId);
        if(askedQuestionIds.length === 10){
            return null;
        }
        const newQuestionFetched = await fetchNewQuestion(askedQuestionIds);

        if (!newQuestionFetched) {
            throw new Error("No new questions found.");
        }
        const newQuestionQid = newQuestionFetched.qid;

        const isAdded = await addIntoAskedQuestion(userId,newQuestionQid);
        if(!isAdded){
            throw new Error("only 10 questions can be asked by a user.");
        }

        const newQuestionsAnswer = newQuestionFetched.ans;

        const options = await fetchRandomDestinations(newQuestionsAnswer);

        const destinationNames = options.map(option => option.destName);
        const randomIndex = Math.floor(Math.random() * (destinationNames.length + 1));
        destinationNames.splice(randomIndex, 0, newQuestionsAnswer);

        const newQuestion = {
            qid: newQuestionFetched.qid,
            questionNumber : askedQuestionIds.length + 1,
            clues: newQuestionFetched.clues,
            options: destinationNames, 
        };

        // Return the newly constructed question object
        return newQuestion;

    } catch (error) {
        throw new Error(`Error while executing fetchRandomQuestionService for userId :${userId} `);
    }
};


export const checkAnswerAndShareFunFactsService = async(qid,selectedAnswer,userId) =>{
    if(!qid || qid.trim()==="" || !selectedAnswer || selectedAnswer.trim()===""){
        throw new Error("question's id is required.");
    }
    try {
        const correctAnswerFetched = await fetchAnswer(qid);
        const response = {
            isCorrect : false,
            funFacts : null,
            updatedScore : 0,
        };

        if(correctAnswerFetched.toLowerCase() !== selectedAnswer.toLowerCase()){
            const updatedScoreResponse = await addScore(userId,0);
            response.updatedScore = updatedScoreResponse.newScore;
            return response;
        }
        // increase score
        const updatedScoreResponse = await addScore(userId,1);
        const fetchedFunFacts = await fetchFunFacts(correctAnswerFetched);

        response.isCorrect = true;
        response.funFacts = fetchedFunFacts;
        response.updatedScore = updatedScoreResponse.newScore;

        return response;
    } catch (error) {
        throw error;
    }
}