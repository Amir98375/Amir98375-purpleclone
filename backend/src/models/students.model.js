const mongoose=require("mongoose")

 const lakmeSchema= new mongoose.Schema({
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

const Lakme= new mongoose.model("lakmies",lakmeSchema)

module.exports=Lakme;