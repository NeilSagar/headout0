import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    qid: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    },
    clues: {
        type: [String], // Array of strings
        required: true
    },
    ans: {
        type: String,
        required: true
    },
    markAsDeleted: {
        type: Boolean,
        default: false // Soft delete mechanism
    }
});

const questionModel = mongoose.model("Question", questionSchema);

export default questionModel;
