import {Request, Response} from "express"
import db from "../database/connection"

export default class UsersController{
    async index(request:Request, response:Response){

        const users = await db.from("users").select()

        return response.json(users)
    }

    async create(request: Request, response:Response){
        const {
            name,
            avatar,
            whatsapp,
            email,
            bio,
        } = request.body
    
        const trx = await db.transaction()
    
        try{
            const insertedUsersIds = await trx("users").insert({
                name,
                avatar,
                whatsapp,
                email,
                bio,
            })
        
            await trx.commit()
        
            return response.status(201).send()
    
        }catch (err){
            await trx.rollback()
            return response.status(400).json({
                error: "Unexpected error while creating new user"
            })
        }
    }
}