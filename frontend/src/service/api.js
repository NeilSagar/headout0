import axios from 'axios';
import {backend_url} from "../config/config.js";


export const createSession = async (userName) => {
    try {
        const sessionApiUri = `${backend_url}/user/create-user-session`;
        const response = await axios.post(sessionApiUri,{userName:userName}); // Use await for asynchronous operation
        return response.data;
    } catch (error) {
        console.log(error);
        console.log("Error occurred while creating session. Error:", error.message || "unknown error"); // Fixed typo
        return null;
    }
}


export const fetchRandomQuestion = async(userId) =>{
    try {
        const randomQuestionApiUri = `${backend_url}/product/random-question-and-clues`;
        const response = await axios.get(randomQuestionApiUri,{
            params : {
                userId : userId
            }
        }); 
        return response.data;
    } catch (error) {
        console.log("Error occurred while fetching next question. Error:", error.message || "unknown error"); // Fixed typo
        return null;
    }
}


export const checkAnswerAndFetchFunFactsApi = async(questionId,selectedAnswer,userId) =>{
    if(!questionId || !selectedAnswer || !userId){
        console.log("checkAnswerAndFetchFunFactsApi needs questionId, selectedAnswer,userId.");
        return null;
    }
    try {
        const checkAnswerApiUri = `${backend_url}/product/check-answer-and-share-fun-facts`;
        const response = await axios.get(checkAnswerApiUri,{
            params : {
                questionId : questionId,
                selectedAnswer : selectedAnswer,
                userId : userId
            }
        }); 
        return response.data;
    } catch (error) {
        console.log("Error occurred while fetching next question. Error:", error.message || "unknown error"); // Fixed typo
        return null;
    }
}


export const fetchFriendDetailsApi = async(friendId)=>{
    if(!friendId ){
        console.log("fetchFriendDetailsApi needs friend's Id.");
        return null;
    }

    try {
        const fetchFriendsScoreApiUri = `${backend_url}/user/score`;
        const response = await axios.get(fetchFriendsScoreApiUri,{
            params : {
                userId : friendId,
            }
        }); 
        return response.data;
    } catch (error) {
        console.log("Error occurred while fetching next question. Error:", error.message || "unknown error"); // Fixed typo
        return null;
    }
}