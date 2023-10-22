const express=require("express");
const authRouter=express.Router();
const jwAuth=require("../middlewares/middlewares.js")//middle wares
const {signup,signin, getUser,logout}=require("../controler/usercontroler.js");

authRouter.post("/signup",signup)
authRouter.post("/signin",signin)
authRouter.get("/getUser",jwAuth,getUser)
authRouter.get("/logout",jwAuth,logout)
module.exports=authRouter;