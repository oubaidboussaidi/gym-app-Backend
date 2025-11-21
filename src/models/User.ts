import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true }, // add email for login
  password: { type: String, required: true }, // hashed password
  abonnement: {
    type: { type: String, required: true },
    paiement: {
      montant: { type: Number, required: true },
      devise: { type: String, required: true },
    },
  },
  progression: {
    poids: { type: Number, required: true },
    squat: { type: Number, required: true },
  },
}, { timestamps: true })

export const User = mongoose.model("users", UserSchema)
