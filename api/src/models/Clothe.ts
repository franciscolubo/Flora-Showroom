import mongoose from 'mongoose'
import { postClothes } from '../types'

const ClotheSchema = new mongoose.Schema<postClothes>({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  image: { type: String, required: true },
  categorie: { type: String, require: true }
})

export default mongoose.model<postClothes>('Clothe', ClotheSchema)
