import { Schema, model } from "mongoose"

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  books: {
    type: String,
    required: false
  }
})

export default model(userSchema, 'User')