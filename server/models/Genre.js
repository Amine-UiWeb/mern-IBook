import { Schema, model } from "mongoose"

const genreSchema = new Schema({
  // used to grab authors and covers images on front-end 
  name: {
    type: String,
    required: true
  }
})

export default model(genreSchema, 'Genre')
