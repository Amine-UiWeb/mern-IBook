import { Schema, model } from "mongoose"

const userSchema = Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: String, required: true },
  favorite_books: { 
    type: Array(Schema.Types.ObjectId),
    ref: 'Book'
  },
  favorite_genres: { 
    type: Array(Schema.Types.ObjectId),
    ref: 'Book'
  },
  favorite_authors: { 
    type: Array(Schema.Types.ObjectId),
    ref: 'Author'
  }
})

export default model('User', userSchema)
