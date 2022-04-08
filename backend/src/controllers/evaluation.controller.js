const  express =  require("express")

const Evaluation = require('../models/evaluation.model')

const router =express.Router()

router.get("",async(req,res)=>{
    const evaluation = await Evaluation.find().lean().exec()
    return res.status(200).send(evaluation)
   
  })


router.post("",async(req,res)=>{
  const evaluation=await Evaluation.create(req.body)
  return res.status(200).send(evaluation)
})


router.patch("/:id",async(req,res)=>{
     const evaluation= await Evaluation.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).send(evaluation)
  })


  router.delete("/:id",async(req,res)=>{
      const evaluation = await Evaluation.findByIdAndDelete(req.params.id)
      return res.status(200).send(evaluation)
  })


  module.exports=router;