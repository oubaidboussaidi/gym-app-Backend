import { Express } from "express"
import { Program } from "../models/Program"

export const programRoutes = (app: Express) => {

  app.get("/programs", async (req, res) => {
    const programs = await Program.find()
    res.json(programs)
  })

  app.post("/programs", async (req, res) => {
    const program = await Program.create(req.body)
    res.json(program)
  })

}
