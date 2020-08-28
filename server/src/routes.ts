import express from "express"
import db from "./database/connection"
import {Request, Response} from "express"
import ReinforcementsController from "./controllers/ReinforcementsController";
import UsersController from "./controllers/UsersController";

const routes = express.Router()
const reinforcementController = new ReinforcementsController()
const usersController = new UsersController()

routes.post("/users", usersController.create)
routes.get("/users", usersController.index)
routes.get("/users/:id", async(request:Request,response:Response)=>{
    const findedUser = await db.from("users").select().where("users.id", "=", request.params.id)
    
    response.json(findedUser)

})

routes.post("/reinforcements", reinforcementController.create)
routes.get("/reinforcements", reinforcementController.index)


export default routes;