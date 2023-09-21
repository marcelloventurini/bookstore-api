import mongoose from "mongoose";
import Book from "../models/Book.js";
import { Author } from "../models/Author.js";

class BookController {
  static async getBooks(req, res) {
    try {
      const booksList = await Book.find({})
      res.status(200).json(booksList)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na requisição.` })
    }
  }

  static async getBookById(req, res) {
    try {
      const id = req.params.id

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Formato do id inválido.' })
      }

      const returnedBook = await Book.findById(id)

      if (!returnedBook) {
        return res.status(404).json({ message: 'Livro não encontrado.' })
      }

      res.status(200).json(returnedBook)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na requisição do livro.` })
    }
  }

  static async createBook(req, res) {
    const newBook = req.body

    try {
      const foundAuthor = await Author.findById(newBook.autor)
      const fullBook = { ...newBook, autor: { ...foundAuthor._doc } }
      const createdBook = await Book.create(fullBook)

      res.status(201).json({ message: 'Criado com sucesso.', book: createdBook })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Erro ao cadastrar livro.` })
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Formato do id inválido.' })
      }

      const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true })

      if (!updatedBook) {
        return res.status(404).json({ message: 'Livro não encontrado.' })
      }

      res.status(200).json({ message: 'Livro atualizado.', book: updatedBook })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao atualizar livro.` })
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Formato do id inválido.' })
      }

      const deletedBook = await Book.findByIdAndDelete(id)

      if (!deletedBook) {
        return res.status(404).json({ message: 'Livro não encontrado.' })
      }

      res.status(200).json({ message: 'Livro apagado com sucesso.' })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao apagar livro.` })
    }
  }

  static async getBooksByPublisher(req, res) {
    const publisher = req.query.editora

    try {
      const booksByPublisher = await Book.find({ editora: publisher })
      res.status(200).json(booksByPublisher)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na busca.`})
    }
  }
}

export default BookController
