import author from "../models/Author.js";

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const authors = await author.find()
      res.status(200).json(authors)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na requisição` })
    }
  }

  static async getAuthorById(req, res) {
    try {
      const auhtorById = await author.findById(req.params.id)
      if (!auhtorById) {
        return res.status(404).json({ message: 'Autor não encontrado.'})
      }

      res.status(200).json(auhtorById)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na requisição.` })
    }
  }
}

export default AuthorController
