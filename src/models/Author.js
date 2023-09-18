import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
  name: String,
  nationality: String,
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'  // Referência ao Schema de livros
  }]
}, { versionKey: false})

const author = mongoose.model('Author', authorSchema)

export default author
