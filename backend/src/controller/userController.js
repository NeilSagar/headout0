

export const createUserSession=async(req,res)=>{
    
}

export const fetchUserSession = async(req,res)=>{
    const {userId} = req.query;
    if(!userId){
        return res.status(404).json({
            statusMessage : "user id is required."
        });
    }

    return res.statu(200).json({message:"hit"});
}


export const fetchScore = async(req,res)=>{
    const {userId} = req.query;
    if(!userId){
        return res.status(404).json({
            statusMessage : "user id is required."
        });
    }

    return res.statu(200).json({message:"hit"});
}
