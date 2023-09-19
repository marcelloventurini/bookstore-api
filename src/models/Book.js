import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number }
}, { versionKey: false })

const Book = mongoose.model('books', bookSchema)

export default Book
