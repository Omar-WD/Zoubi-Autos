
require("dotenv/config")
const express = require('express');
require("./db")
const {errorHandler}= require("./middleware/errorHandles")
const cookieParser = require("cookie-parser");
const path = require('path');
const app = express();
const cors = require("cors")
const port =process.env.PORT || 3000
const productRouter=require("./routers/products");
const authRouter = require("./routers/auth");






app.use(express.static(path.join(__dirname, "client", "dist")))

app.use(cookieParser());
app.use(express.json())
app.use(cors({
    origin: 'https://elzoobiautohandel.onrender.com',
    credentials: true
}))


app.use("/user",authRouter)
app.use("/products",productRouter)

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client", "dist", "index.html" ))
  })
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
