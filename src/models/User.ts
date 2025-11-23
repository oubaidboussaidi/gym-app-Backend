import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  username: String,
  age: Number,

  abonnement: {
    type: {
      type: String,
    },
    paiement: {
      montant: Number,
      devise: String,
    },
  },

  progression: {
    poids: Number,
    squat: Number,
  },
})

export const User = mongoose.model("users", UserSchema)
