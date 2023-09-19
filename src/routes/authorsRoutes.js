import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router()

routes.get('/autores', AuthorController.getAuthors)
routes.get('/autores/:id', AuthorController.getAuthorById)
routes.post('/autores', AuthorController.createAuthor)
routes.put('/autores/:id', AuthorController.updateAuthor)
routes.delete('/autores/:id', AuthorController.deleteAuthor)

export default routes
