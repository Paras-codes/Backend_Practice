const express=require("express")
const Port=process.env.Port||5000

const app=require("./app.js")

app.listen(Port,()=>{
   console.log('server is listening at port ');
})