const express=require('express')
const app=express();
const Port=4001
const hostname='localhost';

app.get('/',(req,res)=>{
res.send({cost: 2000})    
})
app.get('/aboutus',(req,res)=>{
    res.send([{"Name":"Paras",mobile_no:8528737150},{"Name":"Pradeep",mobile_no:8528737150}])    
})
    


app.listen(Port,()=>{
    console.log(`server is running at ${hostname}:${Port}`);
})