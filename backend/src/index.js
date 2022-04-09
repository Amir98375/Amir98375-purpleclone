const  express =  require("express")
const { status } = require("express/lib/response")
const mongoose = require("mongoose")
const cors= require("cors")
const connect= require('./configs/db')
const Hair =require("./models/user.model")
const Lakme = require('./models/students.model')
const Lipistick=require('./models/evaluation.model')
const NewBrand=require('./models/submission.model')
const Facewash = require('./models/batch.model')

const hairController = require('./controllers/user.controller')
const lakmeController= require('./controllers/students.controller')
const lipistickController=require('./controllers/evaluation.controller')
const newBrandController=require('./controllers/submission.controller')
const facewashController=require('./controllers/batch.controller')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/facewashes",facewashController)
app.use("/hairs",hairController)
app.use("/lipsticks",lipistickController)
app.use("/lakmies",lakmeController)
app.use("/newBrands",newBrandController)


 
app.listen(5000 || process.env.PORT,()=>{
    connect()
    console.log("port listening 5000")
})