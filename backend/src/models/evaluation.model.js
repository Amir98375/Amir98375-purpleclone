const mongoose = require("mongoose")

const lipstickSchema= new mongoose.Schema({
    image_url:{type:String,required:true},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    offprice:{type:Number,required:true}
  
   
   
},
{
    timestamps:true,
    versionKey:false
}
)


const Lipstick = new mongoose.model("lipsticks",lipstickSchema)

module.exports=Lipstick;