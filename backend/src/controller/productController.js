


export const fetchRandomQuestions = async(req,res)=>{
    const {userId} = req.query;
    if(!userId){
        return res.status(404).json({
            statusMessage : "userId is required."
        });
    }

    return res.status(200).json({message:"hit"});
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