const mongoose=require("mongoose")

const submissionSchema= new mongoose.Schema({
      
       
    marks:{type:Number,required:true},
    evaluationId:{type:mongoose.Schema.Types.ObjectId,ref:"evaluations",required:true},
    studentId:{type:mongoose.Schema.Types.ObjectId,ref:"students",required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true}
 
    
},
{
    timestamps:true,
    versionKey:false
}

)


const Submission = new mongoose.model("submissions",submissionSchema)

module.exports=Submission;

