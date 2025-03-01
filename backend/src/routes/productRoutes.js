import { Router } from "express";
import {checkAnswerAndShareFunFacts, fetchRandomQuestions } from "../controller/productController.js";


export const productRoutes = Router();


productRoutes.get("/random-question-and-clues",fetchRandomQuestions);
productRoutes.get("/check-answer-and-share-fun-facts",checkAnswerAndShareFunFacts);
