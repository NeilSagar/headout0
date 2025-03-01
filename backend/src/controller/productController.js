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

        return res.status(200).json({
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
    const {questionId,selectedAnswer} = req.query;
    if(!questionId || !selectedAnswer || questionId.trim()==="" || selectedAnswer.trim()===""){
        return res.status(404).json({
            statusMessage : "questionid and selectedAnswer is required."
        });
    }
    
    try {
        const response = await checkAnswerAndShareFunFactsService(questionId,selectedAnswer);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            statusMessage : error.message || "Internal server error."
        });
    }
}