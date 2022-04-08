const  express =  require("express")
const { status } = require("express/lib/response")
const mongoose = require("mongoose")
const cors= require("cors")
const connect= require('./configs/db')
const User =require("./models/user.model")
const Student = require('./models/students.model')
const Evaluation=require('./models/evaluation.model')
const Submission=require('./models/submission.model')
const Batch = require('./models/batch.model')

const usersController = require('./controllers/user.controller')
const studentsController= require('./controllers/students.controller')
const evaluationController=require('./controllers/evaluation.controller')
const submissionController=require('./controllers/submission.controller')
const batchController=require('./controllers/batch.controller')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/batches",batchController)
app.use("/users",usersController)
app.use("/evaluations",evaluationController)
app.use("/students",studentsController)
app.use("/submissions",submissionController)


 
app.listen(5000,()=>{
    connect()
    console.log("port listening 5000")
})