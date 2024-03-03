import { Schema, model } from "mongoose"

const userSchema = Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: String, required: false },
  favorite_books: { type: Array, required: false },
})

export default model('User', userSchema)
