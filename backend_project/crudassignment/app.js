require('dotenv').config()
const express=require("express")

const cors=require('cors') 

const connectTodb=require("./config/db.js")

const app=express();

app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(cors())

connectTodb()
 
const router=require("./router/router.js")
app.use("/",router)

module.exports=app;
