const  express =  require("express")

const Student = require('../models/students.model')

const router =express.Router()

router.get("/:id",async(req,res)=>{
    const student = await Student.findById(req.param.id).populate({path:"userId",select:["first_name","last_name","DOB"]}).lean().exec()
    return res.status(200).send(student)
   
  })
  
  router.get("",async(req,res)=>{
        const student = await Student.find().populate({path:"userId",select:["first_name","last_name","DOB"]}).lean().exec()
        return res.status(200).send(student)
       
      })
router
  router.post("",async(req,res)=>{
      const student=await Student.create(req.body)
      return res.status(200).send(student)
  })
  
  
  router.patch("/:id",async(req,res)=>{
         const student= await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
         return res.status(200).send(student)
      })
  
  
      router.delete("/:id",async(req,res)=>{
          const student = await Student.findByIdAndDelete(req.params.id)
          return res.status(200).send(student)
      })

      module.exports=router;
  
  
      
  