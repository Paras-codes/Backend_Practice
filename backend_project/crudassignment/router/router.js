const express=require("express");
const {home,register,login}=require("../controller/usecontroller.js")

const router=express.Router();
router.get("/",home);
router.post("/registration",register)
router.post("/login",login)

module.exports=router