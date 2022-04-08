const mongoose= require("mongoose")


    const userSchema = new mongoose.Schema({
        first_name:{type:String,required:true},
        last_name:{type:String,required:true},
        DOB:{type:String,required:true},


   },
   {
     timestamps:true,
     versionKey:false
   }
   
   )

   const User = new mongoose.model("users",userSchema)

   module.exports=User;