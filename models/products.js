const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    marke:{type:String,enum:["Mercides","BMW","Volvo","VW"],required:true,},
    modelljahr:{type:Number, required:true},
    erstzulassung:{type:Date},
    kategorie:{type:String,enum:["Beliebig","kleinwagen","kombi","Limousine","SUV/Geländewagen/Pichup"]},
    hubraum:{type:Number},
    anzahlSitzplatze:{type:Number},
    anzahlDerTuren:{type:Number},
    schadstoffklasse:{type:String},
    umweltplakette:{type:String},
    Klimatisierung:{type:String},
    einparkhilfe:{type:String},
    airbags:{type:String},
    farbeHersteller:{type:String},
    farbe:{type:String},
    innenausstattung:{type:String},
    verbrauch:{type:String},
    co2Emissionen:{type:String},
    price:{type:Number},
    images:[{type:String}],
    owner:{type:mongoose.Types.ObjectId, ref:"User", default:"64e5f6e7d2cafa9051fb20f1"},
    ausstattung:[{type:String}]

})

const Product= mongoose.model("Product",productSchema)

module.exports=Product
