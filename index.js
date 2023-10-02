const cors = require("cors")
require("dotenv/config")
const express = require('express');
require("./db")
const port =process.env.PORT || 3000

const productRouter=require("./routers/products")

const app = express();
app.use(express.json())
app.use(cors())

app.use("/products",productRouter)


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});