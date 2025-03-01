import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./db/mongodb/connection.js";
import { productRoutes } from "./src/routes/productRoutes.js";
import { userRoutes } from "./src/routes/userRoutes.js";
import insertCities from "./src/constants/temp.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: true,  // Allows all origins
  credentials: true,
}));

app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));

app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes)


// Initialize Database connection
connectDB();

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});