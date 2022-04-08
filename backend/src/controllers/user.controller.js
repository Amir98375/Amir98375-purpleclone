const  express =  require("express")
const User = require('../models/user.model')
const router =express.Router()

var date = new Date().toLocaleTimeString();

router.get("",async(req,res)=>{
    console.log("get at ",date)
    const user=await User.find().lean().exec()
  return res.status(200).send(user)
}
    
)
router.post("",async(req,res)=>{
    console.log("get at ",date)
     const user = await User.create(req.body)
     return res.status(200).send(user)
})

router.patch("/:id",async(req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).send(user)

})

router.delete("/:id",async(req,res)=>{
    const user = await User.findByIdAndDelete(req.params.id)
    return res.status(200).send(user)
})

module.exports=router;