import questionModel from "../models/mongodb/Question.js";
import userScoreModel from "../models/mongodb/UserScore.js";

import mongoose from "mongoose";

export const fetchAskedQuestionIds = async (userId) => {
    // Validate the userId
    if (!userId || userId.trim() === "") {
      throw new Error("userId is required.");
    }
  
    try {
      // Fetch the user's record by userId
      const userRecord = await userScoreModel.findOne({ userId: userId }).select('questionsAsked -_id');
  
      // If the user is not found, throw an error
      if (!userRecord) {
        throw new Error("User not found.");
      }
  
      // Return the array of asked question IDs
      return userRecord.questionsAsked;
  
    } catch (error) {
      console.error("Error fetching asked question IDs:", error);
      throw new Error("An error occurred while fetching asked question IDs.");
    }
};


export const createNewUser = async(userName)=>{
    if(!userName || userName.trim()===""){
      throw new Error( "userName is required.");
    }

    try {
      console.log("repo hit");
      const newUser = new userScoreModel({
        userName: userName,
        score: 0, 
      });
      const newUserSaved = await newUser.save();
      return newUserSaved;
    } catch (error) {
      const errorMessage = error.message || "Internal Server Error";
      throw new Error(errorMessage);
    }
}



export const addIntoAskedQuestion = async(userId,qid) =>{
  if(!qid){
    throw new Error("qid required");
  }

  try {

    const userRecord = await userScoreModel.findOne({ userId: userId });
    const questionRecord = await questionModel.findOne({qid:qid});
    if (!userRecord) {
      throw new Error("userRecord not found.");
    }
    if(!questionRecord){
      throw new Error(`question with qid:${qid} not found.`);
    }

    if (userRecord.questionsAsked.length < 10) {
      userRecord.questionsAsked.push(qid);
      await userRecord.save();
      return true;  
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}