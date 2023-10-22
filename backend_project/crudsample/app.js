require('dotenv').config();
const express=require('express')

const cors=require('cors');
//used for thecommunication to the models that are deployed on different url

const connectTodb=require('./config/db.js');



const app=express();
//middle ware (to enable server p data req k through)

app.use(express.json())
//server p data json form m bhi accept ho jai

app.use(express.urlencoded({extended:true}))
//req m jo data url k form m encode hoke gya bo server p decode ho sake

app.use(cors())
// ------------------------------


connectTodb()

const router=require('./router/router.js')
app.use('/',router)
// app.post('/create_user',router)

module.exports=app;