const mongoose= require("mongoose")


mongoose
.connect(process.env.CONNECTION_STRING)
.then(()=>console.log("mongodb is connected successfuly"))
.catch((err)=>console.log(err))
