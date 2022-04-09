const  express =  require("express")
const Hair = require('../models/user.model')
const router =express.Router()

var date = new Date().toLocaleTimeString();

router.get("",async(req,res)=>{
    console.log("get at ",date)
    const hair=await Hair.find().lean().exec()
  return res.status(200).send(hair)
}

)
router.post("",async(req,res)=>{
    console.log("get at ",date)
     const hair = await Hair.create(req.body)
     return res.status(200).send(hair)
})

router.patch("/:id",async(req,res)=>{
    const user = await Hair.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).send(hair)

})

router.delete("/:id",async(req,res)=>{
    const hair = await Hair.findByIdAndDelete(req.params.id)
    return res.status(200).send(hair)
})

module.exports=router;