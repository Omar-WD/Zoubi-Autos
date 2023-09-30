const {createProduct, getAllProducts} = require("../controller/product")
const express = require('express');

const productRouter= express.Router()

productRouter.post("/create", createProduct)
productRouter.get("/", getAllProducts)


module.exports=productRouter