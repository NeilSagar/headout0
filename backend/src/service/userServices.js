import { createNewUser, fetchUserDetails } from "../repository/userRepository.js";


export const createUserService = async(userName)=>{
    if(!userName || userName.trim()===""){
        throw new Error( "userName is required.");
    }
    try {
        // console.log("service hit");
        const newUserFetched = await createNewUser(userName);
        const newUser = {
            userId : newUserFetched.userId,
            userName : newUserFetched.userName
        }
        return newUser;
    } catch (error) {
        throw(error);
    }
}



export const fetchUserDetailsService = async(userId)=>{
    if (!userId || userId.trim() === "") {
        throw new Error("userId is required.");
    }

    try {
        const userDetailsResponse = await fetchUserDetails(userId);
        if(!userDetailsResponse)return null;
        const user = {
            userName : userDetailsResponse.userName,
            score : userDetailsResponse.score,
        }
        return user;
    } catch (error) {
        throw error;
    }

}