import app from "./app.js"
import mongoose from 'mongoose';
// database connection may fail 
// database is in another continent 

// mongoose.connect('mongodb+srv://parassahu06:paras031220@cluster0.vqkqu2g.mongodb.net/todoapp')
//   .then(() => console.log('Connected!'));
const port = 3002;
// is code ko ese isliye likha gya jisse ki bo fatte na
// it is an async ifi (imedia calling of function)
(async ()=>{
    try {
        await  mongoose.connect('mongodb+srv://parassahu06:paras031220@cluster0.vqkqu2g.mongodb.net/todoapp');

        console.log("connected succesfully");

        // agar app m hi error h to koi mtlb nii h ki datbase on ho ya na ho 
        app.on('error',(err)=>{
                console.log("error: ",err);
                throw err;
        })
    //    listen yaha isliye h kyuki agar database hi active nii h to koi matlb hi nii h ki app on ho 
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })

        
    } catch (error) {
        console.log("error: ",error);
        throw error;
    }
})()
console.log("hola");