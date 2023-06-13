import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"

const signinverify=async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const jwtSecret=process.env.JWT_KEY
        if(jwtSecret){
            const decode= jwt.verify(req.headers.authorization as string,jwtSecret)
            if(decode){
                next()
            }
        }else{
            throw new Error("no jwt")
        }
    }catch(err){
        console.log(err)
    }
}

export default signinverify