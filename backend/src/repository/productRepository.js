import destinationModel from "../models/mongodb/Destination.js";
import questionModel from "../models/mongodb/Question.js";


export const fetchNewQuestion = async (askedQuestionIds) => {
    // Validate askedQuestionIds
    if (!Array.isArray(askedQuestionIds)) {
      throw new Error("askedQuestionIds should be an array.");
    }
  
    try {
      const newQuestion = await questionModel.aggregate([
        { 
          $match: {
            qid: { $nin: askedQuestionIds }, // Match where qid is not in askedQuestionIds
            markAsDeleted: { $ne: true }      // Ensure deleted questions are excluded
          }
        },
        { 
          $sample: { size: 1 } // Fetch one random question
        },
        { 
          $project: { qid: 1, clues: 1, ans: 1, _id: 0 } // Only include qid, clues, ans and exclude _id
        }
      ]);
      
      if (newQuestion.length === 0) {
        throw new Error("No new question found.");
      }

      // Return the new question
      return newQuestion[0];
      
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
  
  

export const fetchAnswer = async(qid)=>{
    if(!qid || qid.trim()===""){
      throw new Error("question's id is required.");
    }

    try {
      const record = await questionModel.findOne({qid:qid});
      if(record){
        return record.ans;
      }else{
        throw new Error("Question with qid not found.");
      }
    } catch (error) {
      throw error;
    }
}

export const fetchFunFacts = async(destName)=>{
  if(!destName || destName.trim()===""){
    throw new Error("question's id is required.");
  }

  try {
    const record = await destinationModel.findOne({destName:destName});
    if(record){
      return record.funFacts;
    }else{
      throw new Error(`Destionation with name:${destName} not found.`);
    }

  } catch (error) {
    throw error;
  }
}