import { createNewUser } from "../repository/userRepository.js";


export const createUserService = async(userName)=>{
    if(!userName || userName.trim()===""){
        throw new Error( "userName is required.");
    }
    try {
        console.log("service hit");
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
