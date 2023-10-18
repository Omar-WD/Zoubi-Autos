const {signup,signin,signout,getProfile}= require("../controller/user")
const express = require('express');
const { verifyToken } = require('../middleware/verifyToken')


const authRouter= express.Router()

authRouter.get("/profile",verifyToken,getProfile)
authRouter.post("/signup",signup)
authRouter.post("/signin",signin)
authRouter.post("/signout",signout)
module.exports=authRouter

