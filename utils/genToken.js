import jwt from 'jsonwebtoken'

export const genToken=async (id)=>{
    return await jwt.sign({id},"SecretKey",{
        expiresIn:24*60*60
    })
}