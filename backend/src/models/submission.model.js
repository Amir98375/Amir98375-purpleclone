const mongoose=require("mongoose")

const newBrandSchema= new mongoose.Schema({
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


const NewBrand  = new mongoose.model("newBrands",newBrandSchema)

module.exports=NewBrand;

