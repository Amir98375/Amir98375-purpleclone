const  express =  require("express")

const NewBrand = require('../models/submission.model')

const router =express.Router()

router.get("/:id",async(req,res)=>{
    const newBrand = await NewBrand.findById(req.params.id).populate({path:"evaluationId",select:["date_of_evaluation","evaluation_id","-_id"]}).
    populate({path:"studentId",select:["roll_id","current_batch","-_id"]}).
    populate({path:"userId",select:["first_name","last_name","-_id"]}).lean().exec()
    return res.status(200).send(newBrand)
   
  })

  router.get("",async(req,res)=>{
    const newBrand = await NewBrand.find().lean().exec()
    return res.status(200).send(newBrand)
   
  })


router.post("",async(req,res)=>{
  const newBrand=await NewBrand.create(req.body)
  return res.status(200).send(newBrand)
})


router.patch("/:id",async(req,res)=>{
     const newBrand= await NewBrand.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).send(newBrand)
  })


  router.delete("/:id",async(req,res)=>{
      const submission = await NewBrand.findByIdAndDelete(req.params.id)
      return res.status(200).send(submission)
  })


module.exports=router;