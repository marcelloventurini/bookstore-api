import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router()

routes.get('/autores', AuthorController.getAuthors)
routes.get('/autores/:id', AuthorController.getAuthorById)

export default routes
