require('dotenv').config()
const mongoose=require('mongoose');

const connectTodb=async()=>{
   mongoose.connect(process.env.MONGO_URI)
   .then((conn)=>{
       console.log(`connected to db:${conn.connection.host}`);
   }).catch((err)=>{
    console.log(err);
    process.exit(1);
   })
   
}

module.exports=connectTodb;