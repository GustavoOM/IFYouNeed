import {Request, Response} from "express"
import db from "../database/connection"
import convertHourToMinutes from "../utils/convertHourToMinutes"

export default class ReinforcementController{
//    async index(request:Request, response:Response){
//        const filters = request.query
//
//        const subject = filters.subject as string
//        const week_day = filters.week_day as string
//        const time = filters.time as string
//        
//        const periods = [[360,780],[780,1080],[1080,1320]]
//
//        let classes = []
//
//        if(!!week_day && !!subject && !!time){
//            classes = await db.from("classes")
//            .whereExists(function(){
//                this.select("class_schedule.*")
//                    .from("class_schedule")
//                    .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
//                    .whereRaw("`class_schedule`.`week_day` = ??", [Number(week_day)])
//                    .whereRaw("`class_schedule`.`from` <= ??", periods[Number(time)][1])
//                    .whereRaw("`class_schedule`.`to` > ??", periods[Number(time)][0])
//            })
//            .where("classes.subject", "=", subject)
//            .join("users", "classes.user_id", "=", "users.id")
//            .select(["classes.*","users.*"])
//        }else
//
//        if(!!week_day && !!subject){
//            classes = await db.from("classes")
//            .whereExists(function(){
//                this.select("class_schedule.*")
//                    .from("class_schedule")
//                    .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
//                    .whereRaw("`class_schedule`.`week_day` = ??", [Number(week_day)])
//            })
//            .where("classes.subject", "=", subject)
//            .join("users", "classes.user_id", "=", "users.id")
//            .select(["classes.*","users.*"])
//
//        }else 
//        
//        if(!!subject && !!time){
//            classes = await db.from("classes")
//            .whereExists(function(){
//                this.select("class_schedule.*")
//                    .from("class_schedule")
//                    .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
//                    .whereRaw("`class_schedule`.`from` <= ??", periods[Number(time)][1])
//                    .whereRaw("`class_schedule`.`to` > ??", periods[Number(time)][0])
//            })
//            .where("classes.subject", "=", subject)
//            .join("users", "classes.user_id", "=", "users.id")
//            .select(["classes.*","users.*"])
//
//        }else 
//        
//        if(!!time && !!week_day){
//            classes = await db.from("classes")
//            .whereExists(function(){
//                this.select("class_schedule.*")
//                    .from("class_schedule")
//                    .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
//                    .whereRaw("`class_schedule`.`week_day` = ??", [Number(week_day)])
//                    .whereRaw("`class_schedule`.`from` <= ??", periods[Number(time)][1])
//                    .whereRaw("`class_schedule`.`to` > ??", periods[Number(time)][0])
//            })
//            .join("users", "classes.user_id", "=", "users.id")
//            .select(["classes.*","users.*"])
//        }else
//
//        if(!!subject){
//            classes = await db.from("classes")
//            .whereExists(function(){
//                this.select("class_schedule.*")
//                    .from("class_schedule")
//                    .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
//            })
//            .where("classes.subject", "=", subject)
//            .join("users", "classes.user_id", "=", "users.id")
//            .select(["classes.*","users.*"])
//
//        }else 
//
//        if(!!time){
//            classes = await db.from("classes")
//            .whereExists(function(){
//                this.select("class_schedule.*")
//                    .from("class_schedule")
//                    .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
//                    .whereRaw("`class_schedule`.`from` <= ??", periods[Number(time)][1])
//                    .whereRaw("`class_schedule`.`to` > ??", periods[Number(time)][0])
//            })
//            .join("users", "classes.user_id", "=", "users.id")
//            .select(["classes.*","users.*"])
//
//        }else 
//
//        if(!!week_day){
//            classes = await db.from("classes")
//            .whereExists(function(){
//                this.select("class_schedule.*")
//                    .from("class_schedule")
//                    .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
//                    .whereRaw("`class_schedule`.`week_day` = ??", [Number(week_day)])
//            })
//            .join("users", "classes.user_id", "=", "users.id")
//            .select(["classes.*","users.*"])
//
//        }
//        
//        else{
//            classes = await db.from("classes")
//                .select()
//                .join("users", "classes.user_id", "=", "users.id")
//                .select(["classes.*","users.*"])
//        }
//
//        return response.json(classes)
//    }
    

    async index(request:Request, response:Response){

        const reinforcements = await db.from("reinforcements").select().join("users", "reinforcements.user_id", "=", "users.id")

        return response.json(reinforcements)
    }

    async create(request: Request, response:Response){
        const {
            subject,
            principal_year,
            course,
            week_day,
            to,
            from,
            place,
            reinforcement_bio,
            user_id
        } = request.body
    
        const trx = await db.transaction()
    
        try{
            const insertedReinforcementData = await trx("reinforcements").insert({
                subject,
                principal_year,
                course,
                week_day,
                from: convertHourToMinutes(from),
                to: convertHourToMinutes(to),
                place,
                reinforcement_bio,
                user_id
                })
        
            await trx.commit()
        
            return response.status(201).send()
    
        }catch (err){
            await trx.rollback()
            return response.status(400).json({
                error: "Unexpected error while creating new reinforcement"
            })
        }
    }
}