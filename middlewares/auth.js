import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const auth=async (req,res,next)=>{
    try {
        // let token=req.headers?.authorization?.split(" ")[1]
        let token=req.cookies?.jwt
        if(!token){
            return res.status(401).json({
                message:"You're not logged in!"
            })
        }
        let decodedToken=await jwt.verify(token,"SecretKey")
        let existingUser=await User.findById(decodedToken.id)
        if(!existingUser){
            return res.status(401).json({
                message:"User doesn't exist with this id"
            })  
        }
        req.user=existingUser._id
        next()
    } catch (error) {
        res.status(400).json({
            message:error.message
        })  
}
}

