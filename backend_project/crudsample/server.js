const app=require("./app.js")
// advantage of .env is to keep privacy intact 
const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})