const mongoose = require("mongoose")

const evaluationSchema= new mongoose.Schema({
    date_of_evaluation:{type:Date,required:true},
    evaluation_id:{type:Number,required:true},
    batchId:{type:mongoose.Schema.Types.ObjectId,ref:"batches",required:true},
   
   
},
{
    timestamps:true,
    versionKey:false
}
)


const Evaluation = new mongoose.model("evaluations",evaluationSchema)

module.exports=Evaluation;