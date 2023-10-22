const express=require("express");
const app=express();
const authRouter=require("./Router/userroutes.js");
const dbconnect=require("./config/db.js");
const cors=require("cors")//cross communication resource sharing 
const  cookieParser=require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use(cors({
     origin:[process.env.CLIENT_URL],//ye bo port ka address h jaha apka frontend hosted h ye sab api level pr bhi ho sakta h 
     credentials:true//mtlb ki frontend se cookies bhi configure kar sakte h uski permisssion
}))

app.use("/auth/",authRouter);

app.use("/",(req,res)=>{

    res.status(200).json({
        message:"Hello from server"
    })
})

dbconnect();
module.exports=app;