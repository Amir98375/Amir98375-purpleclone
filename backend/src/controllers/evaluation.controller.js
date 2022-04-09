const  express =  require("express")

const Lipstick = require('../models/evaluation.model')

const router =express.Router()

router.get("",async(req,res)=>{
    const lipistick = await Lipstick.find().lean().exec()
    return res.status(200).send(lipistick)
   
  })


router.post("",async(req,res)=>{
  const lipistick=await Lipstick.create(req.body)
  return res.status(200).send(lipistick)
})


router.patch("/:id",async(req,res)=>{
     const lipistick= await Lipstick.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).send(lipistick)
  })


  router.delete("/:id",async(req,res)=>{
      const lipistick = await Lipstick.findByIdAndDelete(req.params.id)
      return res.status(200).send(lipistick)
  })


  module.exports=router;