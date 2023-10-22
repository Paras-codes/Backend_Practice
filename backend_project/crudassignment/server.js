require("dotenv").config()
const app=require("./app.js")
const Port=process.env.PORT||5000;

app.listen(Port,()=>{
   console.log(`server is running on the port ${Port}`);
})