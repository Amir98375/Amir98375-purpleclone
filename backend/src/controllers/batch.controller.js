const  express =  require("express")
const Facewash=require('../models/batch.model')

const router =express.Router()

router.get("",async(req,res)=>{
    const facewash = await Facewash.find().lean().exec()
    return res.status(200).send(facewash)
   
  })


router.post("",async(req,res)=>{
  const facewash=await Facewash.create(req.body)
  return res.status(200).send(facewash)
})


router.patch("/:id",async(req,res)=>{
     const facewash= await Facewash.findByIdAndUpdate(req.params.id,req.body,{new:true})
     return res.status(200).send(facewash)
  })


  router.delete("/:id",async(req,res)=>{
      const facewash = await Facewash.findByIdAndDelete(req.params.id)
      return res.status(200).send(facewash)
  })


module.exports=router;