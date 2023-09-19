import Book from "../models/Book.js";

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
      const returnedBook = await Book.findById(id).populate('autor')

      if (!returnedBook) {
        return res.status(404).json({ message: 'Livro não encontrado.' })
      }

      res.status(200).json(returnedBook)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na requisição do livro.` })
    }
  }

  static async createBook(req, res) {
    try {
      const newBook = await Book.create(req.body)
      res.status(201).json({ message: 'Criado com sucesso.', book: newBook })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Erro ao cadastrar livro.` })
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true })

      if (!updatedBook) {
        return res.status(404).json({ message: 'Livro não encontrado.' })
      }

      res.status(200).json({ message: 'Livro atualizado.', book: updatedBook })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na atualização.` })
    }
  }

  static async deleteBook(req, res) {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id)

      if (!deletedBook) {
        return res.status(404).json({ message: 'Livro não encontrado.' })
      }

      res.status(200).json({ message: 'Livro apagado com sucesso.' })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao apagar livro.` })
    }
  }
}

export default BookController
