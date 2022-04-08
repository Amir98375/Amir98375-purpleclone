
const mongoose = require("mongoose")
const connect = ()=>mongoose.connect(
    "mongodb+srv://web15:web15@cluster0.zieim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )

    module.exports=connect;