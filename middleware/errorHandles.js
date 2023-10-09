const errorHandler=(err,req,res,next)=>{
    res.status(err.statusCode || 500).send(err.message || "Some thing went wrong")
    next()
}

module.exports={errorHandler}