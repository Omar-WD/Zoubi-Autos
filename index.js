const cors = require("cors")
require("dotenv/config")
const express = require('express');
require("./db")
const {errorHandler}= require("./middleware/errorHandles")
const cookieParser = require("cookie-parser");
const port =process.env.PORT || 3000

const productRouter=require("./routers/products");
const authRouter = require("./routers/auth");


const app = express();
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(cookieParser());
app.use("/user",authRouter)
app.use("/products",productRouter)

app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});