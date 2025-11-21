import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

import { userRoutes } from "./routes/users"
import { programRoutes } from "./routes/programs"
import { authRoutes } from "./routes/auth"

dotenv.config() // load .env variables

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Environment variables
const MONGO_URL = process.env.MONGO_URL!
const PORT = process.env.PORT || 3000

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ DB connection error:", err))

// Routes
authRoutes(app)     // authentication: register/login
userRoutes(app)     // users CRUD
programRoutes(app)  // programs CRUD

// Global error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ message: "Something went wrong", error: err.message })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})
