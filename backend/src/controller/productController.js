import { fetchRandomQuestionService } from "../service/productServices.js";



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
            statusMessage:"Internal database Error"
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



    return res.status(200).json({message:"hit"});
}