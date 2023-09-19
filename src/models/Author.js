import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  nome: { type: String, required: true },
  nacionalidade: String,
  livros: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
}, { versionKey: false })

const Author = mongoose.model('Author', authorSchema)

export default Author
