import { Schema, model } from "mongoose"

const reviewSchema = new Schema({
  userId: { type: String, required: true },
  bookId: { type: String, required: true },
  reviewTime: { type: String, required: true },
  likes: { type: String, required: true },
  dislikes: { type: String, required: true  }
})

export default model(reviewSchema, 'Book')
