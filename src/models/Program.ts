import mongoose from "mongoose"

const ProgramSchema = new mongoose.Schema({
  titre: String,
  niveau: String,
  coach: {
    nom: String,
    contact: {
      email: String,
    },
  },
  exercices: [
    {
      nom: String,
      séries: Number,
      reps: Number,
    },
  ],
})

export const Program = mongoose.model("programs", ProgramSchema)
