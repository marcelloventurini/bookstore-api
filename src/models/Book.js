import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  autor: authorSchema
}, { versionKey: false })

const Book = mongoose.model('Book', bookSchema)

export default Book
