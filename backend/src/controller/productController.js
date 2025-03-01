import { checkAnswerAndShareFunFactsService, fetchRandomQuestionService } from "../service/productServices.js";



export const fetchRandomQuestion = async(req,res)=>{
    const {userId} = req.query;
    if(!userId){
        return res.status(404).json({
            statusMessage : "userId is required."
        });
    }
    try {
        const questionAndOptions = await fetchRandomQuestionService(userId);
        if(!questionAndOptions){
            return res.status(200).json({
                isFetched:false,
                statusMessage:"User can ask atmost 10 questions."
            });
        }
        return res.status(200).json({
            isFetched:true,
            questionAndOptions:questionAndOptions,
            statusMessage:"fetched question successfully."
        });

    } catch (error) {
        return res.status(500).json({
            statusMessage:error.message || "Internal database Error"
        });
    }
}



export const checkAnswerAndShareFunFacts = async(req,res)=>{
    const {questionId,selectedAnswer,userId} = req.query;
    if(!userId || !questionId || !selectedAnswer || questionId.trim()==="" || selectedAnswer.trim()==="" || userId.trim()===""){
        return res.status(404).json({
            statusMessage : "questionid and selectedAnswer is required."
        });
    }
    
    try {
        const response = await checkAnswerAndShareFunFactsService(questionId,selectedAnswer,userId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            statusMessage : error.message || "Internal server error."
        });
    }
}