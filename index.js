
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
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: ['https://elzoobiautohandel.onrender.com', 'https://elzoobiautohandel.de','http://localhost:5173'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}))


app.use("/api/user",authRouter)
app.use("/api/products",productRouter)

app.get("*", (req, res)=>{
    // Add CORS header before sending the response
    // res.header('Access-Control-Allow-Origin', 'https://elzoobiautohandel.de');
    res.sendFile(path.join(__dirname, "client", "dist", "index.html" ))
  })
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
