import { Request, Response } from "express"
import { User } from "../models/User"

// GET all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error })
  }
}

// GET single user
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: "User not found" })
    res.json(user)
  } catch (error) {
    res.status(500).json({ error })
  }
}

// CREATE user
export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ error })
  }
}

// UPDATE user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" })
    res.json(updatedUser)
  } catch (error) {
    res.status(400).json({ error })
  }
}

// DELETE user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" })
    res.json({ message: "User deleted successfully" })
  } catch (error) {
    res.status(500).json({ error })
  }
}
