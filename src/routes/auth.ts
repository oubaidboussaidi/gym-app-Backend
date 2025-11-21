import { Express } from "express"
import { register, login } from "../controllers/authController"

export const authRoutes = (app: Express) => {
  app.post("/auth/register", register)
  app.post("/auth/login", login)
}
