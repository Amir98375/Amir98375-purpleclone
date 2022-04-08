const  express =  require("express")
const Batch=require('../models/batch.model')

const router =express.Router()

router.get("",async(req,res)=>{
    const batch = await Batch.find().lean().exec()
    return res.status(200).send(batch)
   
  })


router.post("",async(req,res)=>{
  const batch=await Batch.create(req.body)
  return res.status(200).send(batch)
})


router.patch("/:id",async(req,res)=>{
     const batch= await Batch.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).send(batch)
  })


  router.delete("/:id",async(req,res)=>{
      const batch = await Batch.findByIdAndDelete(req.params.id)
      return res.status(200).send(batch)
  })


module.exports=router;