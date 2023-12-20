const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    marke: {
        type: String,
        enum: ["Mercedes", "BMW", "Volvo", "VW", "Renault", "Peugeot", "Citroen", "Nissan", "Toyota", "Hyundai", "Kia", "Ford", "Audi", "Mazda", "Opel", "Skoda", "Fiat", "Honda", "Mitsubishi", "Suzuki", "Dacia", "Chevrolet", "Daihatsu", "Smart"],
        required: true,
      },
    modelljahr:{type:Number, required:true},
    kilometer:{type:Number},
    motor:{type:Number},
    energy:{type:String, enum:["Benzin", "Diesel","Hybird","Elecetric","LPG"],required:true,},
    erstzulassung:{type:Date, required:true},
    kategorie:{type:String,enum:["Beliebig","kleinwagen","kombi","Limousine","Geländewagen"],required:true,},
    hubraum:{type:Number, required:true},
    anzahlSitzplatze:{type:Number},
    anzahlDerTuren:{type:Number},
    schadstoffklasse:{type:String, required:true},
    umweltplakette:{type:String, required:true},
    Klimatisierung:{type:String, required:true},
    einparkhilfe:{type:String, required:true},
    airbags:{type:String, required:true},
    farbeHersteller:{type:String, required:true},
    farbe:{type:String, required:true},
    innenausstattung:{type:String, required:true},
    verbrauch:{type:String, required:false},
    co2Emissionen:{type:String, required:false},
    price:{type:Number, required:true},
    images:[{type:String, required:true}],
    owner:{type:mongoose.Types.ObjectId, ref:"User", default:"64e5f6e7d2cafa9051fb20f1"},
    ausstattung:[{type:String}],
    Getriebe:{type:String, enum:["Manual","Automatik","Halbautomatik"] , required:true }

})

const Product= mongoose.model("Product",productSchema)


module.exports= Product
