import { createUserService, fetchUserDetailsService } from "../service/userServices.js";


export const createUserSession=async(req,res)=>{
    const {userName} = req.body;
    if(!userName || userName.trim()===""){
        return res.status(404).json({
            statusMessage: "userName is required."
        });
    }
    
    try {

        const newUser = await createUserService(userName);
        return res.status(201).json({
            user : newUser
        });
    } catch (error) {
        return res.status(500).json({
            statusMessage: "Error while creating new User.",
            errorMessage : error.message || "Internal Server Error",
        });
    }
}

export const fetchUserSession = async(req,res)=>{
    const {userId} = req.query;
    if(!userId){
        return res.status(404).json({
            statusMessage : "user id is required."
        });
    }
    
    return res.status(200).json({message:"hit"});
}


export const fetchScore = async(req,res)=>{
    const {userId} = req.query;
    if(!userId){
        return res.status(404).json({
            statusMessage : "user id is required.",
            user:null,
        });
    }

    try {
        const response = await fetchUserDetailsService(userId);
        if(!response){
            return res.status(400).json({
                statusMessage:"Not found user with given userId",
                message : "Not Resource Found."
            });
        }
        return res.status(200).json({
            statusMessage:"Found user",
            user:response,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({statusMessage : error.message || "Internal server Error"});
    }
}
