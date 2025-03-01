import { Router } from "express";
import {checkAnswerAndShareFunFacts, fetchRandomQuestion } from "../controller/productController.js";


export const productRoutes = Router();


productRoutes.get("/random-question-and-clues",fetchRandomQuestion);
productRoutes.get("/check-answer-and-share-fun-facts",checkAnswerAndShareFunFacts);
