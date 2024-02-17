import { Schema, model } from "mongoose"

const reviewSchema = new Schema({
  olid: { type: String, required: true },
  userId: { type: String, required: true },
  likes: { 
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
    required: true 
  },
  dislikes: { 
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
    required: true 
  }
}, {
  timestamps: true,
})

export default model(reviewSchema, 'Book')
