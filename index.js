const express = require('express');
require("dotenv/config")
require("./db.js")
const productRouter = require("./routers/products.js")

const port = process.env.PORT || 3000

const app=express()
app.use(express.json())

app.use("/products",productRouter)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
