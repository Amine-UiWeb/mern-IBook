import { Schema, model } from "mongoose"

const bookSchema = new Schema({
  // used to grab covers images on frontend 
  ISBN: { type: String, required: true },

  // general information
  title: { type: String, required: true },
  author: { type: String, required: true },
  mainGenre: { type: String, required: true },
  genres: { type: String, required:true },
  puplishDate: { type: Date, required: true },
  description: { type: String, required: true },
  reviews: { type: Array() },
  
  // If it's in a collection/series, provide its name, null otherwise
  collection: { type: String, required: false },
  series: { type: String, required: false },
})

export default model(bookSchema, 'Book')
