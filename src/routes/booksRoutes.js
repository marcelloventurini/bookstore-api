import express from "express";
import BookController from "../controllers/bookController.js";

const booksRoutes = express.Router()

booksRoutes.get('/livros', BookController.getBooks)
booksRoutes.get('/livros/:id', BookController.getBookById)
booksRoutes.post('/livros', BookController.registerBook)
booksRoutes.put('/livros/:id', BookController.updateBook)
booksRoutes.delete('/livros/:id', BookController.deleteBook)

export default booksRoutes
