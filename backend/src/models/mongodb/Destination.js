import mongoose from "mongoose";

const destinationSchema = mongoose.Schema({
    destId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true
    },
    destName: {
        type: String,
        required: true
    },
    funFacts: {
        type: [String], // Array of strings
        required: true
    },
    markedAsDeleted: {
        type: Boolean,
        default: false // Soft delete mechanism
    }
});

const destinationModel = mongoose.model("Destination", destinationSchema);

export default destinationModel;
