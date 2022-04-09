const mongoose= require("mongoose")


    const hairSchema = new mongoose.Schema({
      image_url:{type:String,required:true},
      title:{type:String,required:true},
      price:{type:Number,required:true},
      off_price:{type:Number,required:true}
      
   },
   {
     timestamps:true,
     versionKey:false
   }
   
   )

   const Hair = new mongoose.model("hairs",hairSchema)

   module.exports=Hair;