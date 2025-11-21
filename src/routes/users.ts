import { Express } from "express"
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers"

export const userRoutes = (app: Express) => {
  app.get("/users", getAllUsers)
  app.get("/users/:id", getUserById)
  app.post("/users", createUser)
  app.put("/users/:id", updateUser)
  app.delete("/users/:id", deleteUser)
}
