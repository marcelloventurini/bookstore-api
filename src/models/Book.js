import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }
}, { versionKey: false })

const Book = mongoose.model('Book', bookSchema)

export default Book
