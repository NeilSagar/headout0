import { fetchNewQuestion, fetchRandomDestinations } from "../repository/productRepository.js";
import { fetchAskedQuestionIds } from "../repository/userRepository.js";


export const fetchRandomQuestionService = async (userId) => {
    // Validate userId input
    if (!userId || userId.trim() === "") {
        throw new Error("userId is required.");
    }

    try {
        const askedQuestionIds = await fetchAskedQuestionIds(userId);
        
        const newQuestionFetched = await fetchNewQuestion(askedQuestionIds);
        
        // If no new question is found, throw an error
        if (!newQuestionFetched) {
            throw new Error("No new questions found.");
        }

        const newQuestionsAnswer = newQuestionFetched.ans;

        const options = await fetchRandomDestinations(newQuestionsAnswer);
        const destinationNames = options.map(option => option.destName);
        destinationNames.push(newQuestionsAnswer);

        const newQuestion = {
            qid: newQuestionFetched.qid,
            clues: newQuestionFetched.clues,
            options: destinationNames, 
        };

        // Return the newly constructed question object
        return newQuestion;

    } catch (error) {
        throw new Error("Error while executing fetchRandomQuestionService for userId : ",userId);
    }
};
