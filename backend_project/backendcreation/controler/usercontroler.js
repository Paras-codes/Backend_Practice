
const emailvalidator=require('email-validator')
const userModel = require("../model/useschema.js");
const bcrypt=require('bcrypt')
exports.signup = async (req, res, next) => {
    const { name,email,password,confirmpassword} = req.body;
    console.log(name,email, password,confirmpassword);
    if(!name||!email||!password||!confirmpassword){
        return res.status(400).json({
            sucess: false,
            massage:'all fields are required '
        }); 
    }
    const validemail=emailvalidator.validate(email)
    if(!validemail){
        return res.status(400).json({
            sucess: false,
            massage:'Enter a valid email id '
        });
    }

    if(password!=confirmpassword){
        return res.status(400).json({
            sucess: false,
            massage:'password doesnt match  '
        });
    }
    try{
    const userinfo=userModel(req.body);
    const result=await userinfo.save();

    return res.status(200).json({
        sucess: true,
        data:"signup succesful "
    });
}
catch(err){
    if(err.code===11000){
        
    return res.status(400).json({
        sucess: false,
        massage:'account already exist with this email id '
    });
}
       
return res.status(400).json({
    sucess: false,
    massage:err.massage
});
}
}

exports.signin=async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        return res.status(400).json({
            sucess: false,
            massage:'all fields are required '
        });  
    }
    try{
    const user=await userModel.findOne({
        email
    })
    .select('+password');

    if(!user ||!bcrypt.compare( user.password,password)){
        return res.status(400).json({
            sucess: false,
            massage:'invalid credential '
        });  
    }
     const token=user.jwtToken();
     user.password=undefined;

     const cookieOption={
        maxAge :24* 60*60*1000,
        httpOnly:true//jisse ki cookie ko koi bhi client side se acess na karpai
     };
     res.cookie("token",token,cookieOption)
     res.status(200).json({
        sucess: true,
        data:user
    });
}
    
    catch(e){
        return res.status(400).json({
            sucess: false,
            massage:err.massage
        });
    }
}
exports. getUser=async(req,res,next)=>{
     const userId=req.user.id;
     try{
        const user=await userModel.findById(userId);
        return res.status(200).json({
            sucess: true,
            data:user});

     }
     catch(err){
        return res.status(400).json({
            sucess: false,
            massage:err.massage
        });
     }
}
exports.logout=(req,res,next)=>{
    try{
       const cookieOption={
        expires:new Date(),
        httpOnly:true
       };
       res.cookie("token",null,cookieOption);
       res.status(200).json({
        sucess: true,
        message:'logged out sucessfully '
    });

    }
    catch(err){
        return res.status(400).json({
            sucess: false,
            massage:err.massage
        });
    }
}