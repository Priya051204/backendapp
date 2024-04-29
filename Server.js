const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

//MongoDB Compass Connection
// const dburl = "mongodb://localhost:27017/sdpproject"
// mongoose.connect(dburl).then(() => {
//     console.log("Connected to DB Successfully")
// }).catch((err) => {
//     console.log(err.message)
// });
//MongoDb Atlas Connection
const dburl = "mongodb+srv://admin:admin@cluster0.4uf4q8c.mongodb.net/sdpproject?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dburl).then(() => {
    console.log("Connected to MongoDB Atlas Successfully")
}).catch((err) => {
    console.log(err.message)
});


const app = express() 
app.use(cors())
app.use(express.json()) 

const adminrouter = require("./routes/adminroutes")
const customerrouter = require("./routes/customerroutes")
const sellerrouter = require("./routes/sellerroutes");
const mainrouter = require("./routes/mainroutes");

app.use("",adminrouter) 
app.use("",customerrouter)
app.use("",sellerrouter) 
app.use("",mainrouter) 

const port=2014
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})