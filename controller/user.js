require ("dotenv/config")
const User = require ("../models/user")
const bcrypt = require("bcrypt")
const ErrorResponse = require("../utils/errorResponse")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")


const signup = async (req, res, next) => {
    try {
        const { email, password} = req.body
        const user = await User.findOne({email})
        if (user) { throw new ErrorResponse("user is already avialable", 400) }
        const hashed = await bcrypt.hash(password, 10)
        const newUser = await User.create({ email, password: hashed })
        const payload = { email: newUser.email, id: newUser._id }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "500m" })
        res.cookie("access_token", token, { maxage: 500 * 6000 }).json(payload)
    } catch (error) {
        next(error);
    }
}

const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email }).select("+password")

        if (!user) { throw new ErrorResponse("user not found", 404) }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) { throw new ErrorResponse("wrong password", 401) }
        const payload = { email: user.email, id: user._id }
        const token = jwt.sign(payload, process.env.JWT_SECRET)
        res.cookie("access_token", token, { maxage: 500 * 6000,httpOnly: true, }).json(payload)
    } catch (error) {
        next(error);
    }
}

const signout = async (req, res, next) => {
    try {
        res.cookie("access_token", "", { maxage: 1 })
        res.status(200).send("signed out successfully")
    } catch (error) {
        next(error);
    }
}



module.exports={signup, signin, signout}