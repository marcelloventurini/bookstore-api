import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router()

routes.get('/livros', BookController.getBooks)
routes.get('/livros/busca', BookController.getBooksByPublisher)
routes.get('/livros/:id', BookController.getBookById)
routes.post('/livros', BookController.createBook)
routes.put('/livros/:id', BookController.updateBook)
routes.delete('/livros/:id', BookController.deleteBook)

export default routes
