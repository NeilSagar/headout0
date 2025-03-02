import mongoose from "mongoose";



export const connectDB = async ()=>{
    const DB_URI = process.env.DB_URI;
    try {
        console.log(DB_URI);
        await mongoose.connect(DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to database");
    }    
}