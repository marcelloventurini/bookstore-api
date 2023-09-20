import mongoose from "mongoose";
import Author from "../models/Author.js";

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const authors = await Author.find()
      res.status(200).json(authors)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na requisição` })
    }
  }

  static async getAuthorById(req, res) {
    try {
      const id = req.params.id

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Formato do id inválido.' })
      }

      const auhtorById = await Author.findById(id).populate('livros')

      if (!auhtorById) {
        return res.status(404).json({ message: 'Autor não encontrado.' })
      }

      res.status(200).json(auhtorById)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na requisição.` })
    }
  }

  static async createAuthor(req, res) {
    try {
      const newAuthor = await Author.create(req.body)
      res.status(201).json({ message: 'Autor criado com sucesso', author: newAuthor })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao cadastrar autor.` })
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Formato do id inválido.' })
      }

      const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, { new: true })

      if (!updatedAuthor) {
        return res.status(404).json({ message: 'Autor não encontrado.' })
      }

      res.status(200).json({ message: 'Autor atualizado com sucesso.', author: updatedAuthor })
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao atualizar autor.` })
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Formato do id inválido.' })
      }

      const deletedAuthor = await Author.findByIdAndDelete(id)

      if (!deletedAuthor) {
        return res.status(404).json({ message: 'Autor não encontrado.' })
      }

      res.status(200).json({ message: 'Autor apagago com sucesso.' })
    } catch (error) {
      res.status(500).json({ message: 'Falha ao apagar autor.' })
    }
  }
}

export default AuthorController
