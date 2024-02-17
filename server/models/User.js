import { Schema, model } from "mongoose"

const userSchema = Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: String, required: false },
  favorite_books: { type: Array, required: false },
  favorite_genres: { type: Array, required: false },
  favorite_authors: { type: Array, required: false }
})

export default model('User', userSchema)
