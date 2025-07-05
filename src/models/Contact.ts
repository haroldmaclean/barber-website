import mongoose, { Schema } from 'mongoose'

const contactSchema = new Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
)

export const Contact =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema)
