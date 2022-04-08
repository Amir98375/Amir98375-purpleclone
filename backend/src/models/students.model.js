const mongoose=require("mongoose")

 const studentSchema= new mongoose.Schema({
    roll_id:{type:Number,required:true},
    current_batch:{type:Number,required:true},
    student_id:{type:Number,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"users",required:true}
    
    
},
{
  timestamps:true,
  versionKey:false  
}
)

const Student= new mongoose.model("students",studentSchema)

module.exports=Student;