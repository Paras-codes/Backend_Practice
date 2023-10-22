const express=require('express')
const {home,createUser,getUser,deleteUser,updteUser}=require('../controllers/usercontroller.js')


const router=express.Router();
router.get('/',home)
router.post('/createUser',createUser)
router.get("/getUsers",getUser);
router.delete("/deleteUser/:id",deleteUser);
router.put("/updateUser/:id",updteUser)
module.exports=router;