const jwt = require ("jsonwebtoken")

const verifyToken=(req,res,next)=>{
 try {  
    const token= req.cookies.access_token
    if(token){
        const payload= jwt.verify(token,process.env.JWT_SECRET)
        req.user= payload
        return next ()
     } 
     res.status(403).send("forbidden")
     
 } catch (error) {
    console.log("failed to verify token")
    res.status(403).send('Forbidden');
 }
}

module.exports={verifyToken}