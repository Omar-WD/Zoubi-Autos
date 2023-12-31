const jwt = require ("jsonwebtoken")
const ErrorResponse = require('../utils/errorResponse');

const verifyToken=(req,res,next)=>{
 try {  
    const token= req.cookies.access_token
    console.log("token",token);
    if(token){
        const payload= jwt.verify(token,process.env.JWT_SECRET)
        req.user= payload
        console.log("req.user",req.user);
        console.log("payload",payload);
        return next ()
     } 
     return next(new ErrorResponse('Unauthorized: No token provided', 401));
     
 } catch (error) {
    console.log("failed to verify token")
    return next(new ErrorResponse('Unauthorized: No token provided', 401));
 }
}

module.exports={verifyToken}