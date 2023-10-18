const express = require('express')
const upload =require("../middleware/multer-upload")
const {createProduct,getAllProducts,getProductById,deleteProduct}= require("../controller/product")
const  {cloudinaryUpload} = require ('../middleware/cloudinary-upload')
const { verifyToken } = require('../middleware/verifyToken')


const productRouter= express.Router()

productRouter.post("/create",verifyToken,upload.array("images"),cloudinaryUpload ,createProduct)
productRouter.get("/",getAllProducts)
productRouter.get("/:id",getProductById)
productRouter.delete("/:id", deleteProduct);


module.exports=productRouter
