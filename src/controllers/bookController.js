import book from "../models/Book.js";

class BookController {
  static async getBooks(req, res) {
    try {
      const booksList = await book.find({})
      res.status(200).json(booksList)
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha na requisição.` })
    }
  }

  static async getBookById(req, res) {
    try {
      const id = req.params.id
      const returnedBook = await book.findById(id)
      res.status(200).json(returnedBook)
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha na requisição do livro.` })
    }
  }

  static async registerBook(req, res) {
    try {
      const newBook = await book.create(req.body)
      res.status(201).json({ message: 'Criado com sucesso.', book: newBook })
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Erro ao cadastrar livro.` })
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id
      await book.findByIdAndUpdate(id, req.body)
      res.status(200).json({ message: 'Livro atualizado.' })
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha na atualização.` })
    }
  }

  static async deleteBook(req, res) {
    try {
      await book.findByIdAndDelete(req.params.id)
      res.status(200).json({ message: 'Livro apagado com sucesso.' })
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha ao apagar livro.` })
    }
  }
}

export default BookController
