const  express =  require("express")

const Submission = require('../models/submission.model')

const router =express.Router()

router.get("/:id",async(req,res)=>{
    const submission = await Submission.findById(req.params.id).populate({path:"evaluationId",select:["date_of_evaluation","evaluation_id","-_id"]}).
    populate({path:"studentId",select:["roll_id","current_batch","-_id"]}).
    populate({path:"userId",select:["first_name","last_name","-_id"]}).lean().exec()
    return res.status(200).send(submission)
   
  })

  router.get("",async(req,res)=>{
    const submission = await Submission.find().populate({path:"evaluationId",select:["date_of_evaluation","evaluation_id"]}).
    populate({path:"studentId",select:["roll_id","current_batch"]}).
    populate({path:"userId",select:["first_name","last_name"]}).lean().exec()
    return res.status(200).send(submission)
   
  })


router.post("",async(req,res)=>{
  const submission=await Submission.create(req.body)
  return res.status(200).send(submission)
})


router.patch("/:id",async(req,res)=>{
     const submission= await Submission.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).send(submission)
  })


  router.delete("/:id",async(req,res)=>{
      const submission = await Submission.findByIdAndDelete(req.params.id)
      return res.status(200).send(submission)
  })


module.exports=router;