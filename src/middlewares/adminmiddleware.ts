import { Request,Response,NextFunction } from "express";
import jwt,{ JwtPayload }  from "jsonwebtoken"

interface DecodedToken extends JwtPayload {
    admin: boolean;
  }

const adminnverify=async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const jwtSecret=process.env.JWT_KEY
        if(jwtSecret){
            const decode= jwt.verify(req.headers.authorization as string,jwtSecret) as DecodedToken
            const isAdmin=decode.admin
            if(isAdmin){
                next()
            }
        }else{
            throw new Error("no jwt")
        }
    }catch(err){
        console.log(err)
    }
}

export default adminnverify