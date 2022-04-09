const  express =  require("express")

const Lakme = require('../models/students.model')

const router =express.Router()

router.get("/:id",async(req,res)=>{
    const lakme = await Lakme.findById(req.param.id).populate({path:"userId",select:["first_name","last_name","DOB"]}).lean().exec()
    return res.status(200).send(lakme)
})
  router.get("",async(req,res)=>{
        const lakme = await Lakme.find().lean().exec()
        return res.status(200).send(lakme)
       
      })

  router.post("",async(req,res)=>{
      const lakme=await Lakme.create(req.body)
      return res.status(200).send(lakme)
  })
  
  
  router.patch("/:id",async(req,res)=>{
         const lakme= await Lakme.findByIdAndUpdate(req.params.id,req.body,{new:true})
         return res.status(200).send(lakme)
      })
  
  
      router.delete("/:id",async(req,res)=>{
          const lakme = await Lakme.findByIdAndDelete(req.params.id)
          return res.status(200).send(lakme)
      })

      module.exports=router;