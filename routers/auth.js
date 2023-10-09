const {signup,signin,signout}= require("../controller/user")
const express = require('express');

const authRouter= express.Router()

authRouter.post("/signup",signup)
authRouter.post("/signin",signin)
authRouter.post("/signout",signout)
module.exports=authRouter

