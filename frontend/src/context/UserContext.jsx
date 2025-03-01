import { createContext, useContext, useState } from "react";
import { checkAnswerAndFetchFunFactsApi, createSession, fetchFriendDetailsApi, fetchRandomQuestion } from "../service/api.js";

// Properly capitalize context name
const UserContext = createContext();

function UserProvider({ children }) {
    const [userId, setUserId] = useState(null);
    const [currentQuestionId,setCurrentQuestionId] = useState(null);
    const [currentQuestionCount,setCurrentQuestionCount] = useState(null);
    const [currentScore,setCurrentScore] = useState(0);
    
    async function fetchUserId(userName) {
        try {
            const response = await createSession(userName);
            if (response && response.user && response.user.userId) { // Assuming response contains userId
                
                setUserId(response.user.userId); // Store the userId in state
                return true; // Return userId or any relevant data
            } else {
                return false;
            }
        } catch (error) {
            console.log("Error: ", error.message || "Unknown Error");
            return false;
        }
    }

    async function fetchNextQuestion(){
        if(!userId){
            console.log("userId is not valid.");
            return;
        }

        try {
            const response = await fetchRandomQuestion(userId);
            if(response){
                const questionAndOptions = response.questionAndOptions;
                setCurrentQuestionId(questionAndOptions.qid);
                setCurrentQuestionCount(questionAndOptions.questionNumber);

                const clues = questionAndOptions.clues;
                const options = questionAndOptions.options;
                return {
                    clues : clues,
                    options : options,
                    isFetched : response.isFetched
                }
            }else{
                throw new Error("Api error");
            }

        } catch (error) {
            console.log("Error while fetching next question in frontend : ",error.message || "Unknown error");
            return null;
        }
    }

    async function checkAnswerAndFetchFunFacts(selectedAnswer){
        if(!currentQuestionId || !selectedAnswer || selectedAnswer.trim()===""){
            console.log(currentQuestionId,selectedAnswer,selectedAnswer);
            console.log("checkAnswerAndFetchFunFacts function needs valid parameters.");
            return;
        }

        try {
            const response = await checkAnswerAndFetchFunFactsApi(currentQuestionId,selectedAnswer,userId);
            if(response){
                console.log(response);
                const isCorrect = response.isCorrect;
                setCurrentScore(response.updatedScore);

                const funFacts = response.funFacts;
                return {
                    funFacts : funFacts,
                    isCorrect : isCorrect,
                }
            }else{
                throw new Error("Api error");
            }

        } catch (error) {
            console.log("Error while checking answer in frontend : ",error.message || "Unknown error");
            return null;
        }
    }

    async function fetchFriendsScore(friendId){
        if(!friendId){
            console.log("friendId is required.")
        }
        try {
            const response = await fetchFriendDetailsApi(friendId);
            if(response){
                return response.user;
            }else{
                throw new Error("Api error");
            }
        } catch (error) {
            console.log("Error while fetching friend's details in frontend : ",error.message || "Unknown error");
            return null;
        }
    }
    return (
        <UserContext.Provider value={{ 
            fetchUserId, 
            userId,
            fetchNextQuestion,
            currentQuestionCount ,
            checkAnswerAndFetchFunFacts,
            currentScore,
            fetchFriendsScore
        }}>
            {children}
        </UserContext.Provider>
    );
}

function UserDetails() {
    return useContext(UserContext); // Renamed for better clarity
}

export { UserDetails, UserProvider };
