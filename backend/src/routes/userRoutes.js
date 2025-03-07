import { Router } from "express";
import { createUserSession, fetchScore,fetchUserSession } from "../controller/userController.js";


export const userRoutes = Router();

userRoutes.post("/create-user-session",createUserSession);
userRoutes.get("/fetch-user-session",fetchUserSession);
userRoutes.get("/score",fetchScore);