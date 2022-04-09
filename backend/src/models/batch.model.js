const mongoose = require("mongoose")

const facewashSchema= new mongoose.Schema({

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


const Facewash = new mongoose.model("facewashes",facewashSchema)

module.exports=Facewash;