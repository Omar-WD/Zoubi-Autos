require("dotenv/config")
const Product= require ("../models/products")

const createProduct=async(req,res)=>{
    try {
        const { marke, modelljahr, erstzulassung, kategorie, hubraum, anzahlSitzplatze, anzahlDerTuren, schadstoffklasse, umweltplakette, Klimatisierung, einparkhilfe, airbags, farbeHersteller, farbe, innenausstattung, verbrauch, co2Emissionen, price,owner, ausstattung } = req.body
        // const images=req.files.map(file=>file.secure_url)
        const product= await Product.create({ 
            marke, modelljahr, erstzulassung, kategorie, hubraum, anzahlSitzplatze, anzahlDerTuren, schadstoffklasse, umweltplakette, Klimatisierung, einparkhilfe, airbags, farbeHersteller, farbe, innenausstattung, verbrauch, co2Emissionen, price,owner, ausstattung
        })
        res.status(201).json(product)
        
    } catch (error) {
        console.error("Error creating product:", error)
        res.status(500).send("failed while creating new product" + error.message)
        
    }
}


const getAllProducts=async(req,res)=>{
    try {
        const product = await Product.find()
        res.status(201).json(product)
    } catch (error) {
        res.status(500).send("failed while getting all products" + error.message)
    }
}


module.exports={createProduct, getAllProducts}