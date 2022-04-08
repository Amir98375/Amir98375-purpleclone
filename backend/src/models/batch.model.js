const mongoose = require("mongoose")

const batchSchema= new mongoose.Schema({

    batch_name:{type:String,required:true},
    batch_id:{type:Number,required:true}
    

},
{
    timestamps:true,
    versionKey:false
}
)


const Batch = new mongoose.model("batches",batchSchema)

module.exports=Batch;