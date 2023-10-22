
require('dotenv').config()
const moongoose = require('mongoose');
const MONGO_URI=process.env.MONGO_URI||"mongodb://localhost:27017/assignmentdb";

const dbconnect=async()=>{
    moongoose.connect(MONGO_URI)
    .then((conn)=>{
   console.log(`connected to db :${conn.connection.host}`); 
    })
    .catch((err)=>{
        console.log("error:",err);
    })
}

module.exports=dbconnect;