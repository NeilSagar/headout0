import mongoose from "mongoose";

const userScoreSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(), // Auto-generate
        unique: true
    },
    userName: {
        type: String,
        required: true,
    },
    questionsAsked:{
        type:[mongoose.Schema.Types.ObjectId],
        default: [],
    },
    score: {
        type: Number,
        required: true,
    },
});

const userScoreModel = mongoose.model("userscore", userScoreSchema);

export default userScoreModel;
