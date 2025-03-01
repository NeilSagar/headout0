import destinationModel from "../models/mongodb/Destination.js";

import mongoose from "mongoose";
import questionModel from "../models/mongodb/Question.js";


export const fetchNewQuestion = async (askedQuestionIds) => {
    // Validate askedQuestionIds
    if (!Array.isArray(askedQuestionIds)) {
      throw new Error("askedQuestionIds should be an array.");
    }
  
    try {
      // Fetch one question that is not in the askedQuestionIds
      const newQuestion = await questionModel.findOne({
        qid: { $nin: askedQuestionIds },  // Match where qid is not in askedQuestionIds
        markAsDeleted: { $ne: true }      // Ensure deleted questions are excluded
      }).select('qid clues ans -_id');    // Only return qid, clues, and ans fields, exclude _id
  
      // Return the new question
      return newQuestion;
      
    } catch (error) {
      console.error("Error fetching new question:", error);
      throw new Error("An error occurred while fetching a new question.");
    }
  };

export const fetchRandomDestinations = async (excludeDestinationName) => {
    try {
        const randomDestinations = await destinationModel.aggregate([
        { 
            $match: { 
            destName: { $ne: excludeDestinationName }  // Exclude the specific destination name
            }
        },
        { 
            $sample: { size: 3 }  // Randomly sample 4 documents
        },
        { 
            $project: { destName: 1, _id: 0 }  // Only include destName and exclude _id
        }
        ]);

        return randomDestinations;
        
    } catch (error) {
        throw (error);
    }
};
  
  