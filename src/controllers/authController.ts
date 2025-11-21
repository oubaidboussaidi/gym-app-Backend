import { Request, Response } from "express"
import { User } from "../models/User"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET = "your_jwt_secret_key" // move to .env in production

// Register new user
export const register = async (req: Request, res: Response) => {
  try {
    const { nom, age, email, password, abonnement, progression } = req.body

    // check if email exists
    const existingUser = await User.findOne({ email })
    if (existingUser) return res.status(400).json({ message: "Email already exists" })

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // create user
    const user = new User({
      nom,
      age,
      email,
      password: hashedPassword,
      abonnement,
      progression
    })

    await user.save()
    res.status(201).json({ message: "User registered successfully" })
  } catch (error) {
    res.status(500).json({ error })
  }
}

// Login user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: "User not found" })

    // compare password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ message: "Invalid password" })

    // create JWT
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "1d" })

    res.json({ message: "Login successful", token })
  } catch (error) {
    res.status(500).json({ error })
  }
}
