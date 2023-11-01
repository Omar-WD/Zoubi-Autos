const cloudinary = require("cloudinary")
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key:process.env.API_KEY , 
  api_secret: process.env.API_SECRET 
});

const cloudinaryUpload= async(req,res,next)=>{
    try {
      

        const files = req.files; 
        const results = await Promise.all(
            files.map(async (file) => {
                const result = await cloudinary.v2.uploader.unsigned_upload(file.path, "yvoewdof");
                result.localpath = file.path;
                return result;
            })
        );
        
        
        req.files=results
        next()
    } catch (error) {
        console.error(error);
        res.status(500).send("some thing went wrong")
        
    }
}


module.exports={cloudinaryUpload}