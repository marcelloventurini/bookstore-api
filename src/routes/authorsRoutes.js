import express from "express";
import AuthorController from "../controllers/authorController.js";

const authorRoutes = express.Router()

authorRoutes.get('/autores', AuthorController.getAuthors)
authorRoutes.get('/autores/:id', AuthorController.getAuthorById)

export default authorRoutes
