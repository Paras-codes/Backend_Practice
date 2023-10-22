const User=require("../model/userschema.js")
exports.home= (req,res)=>{
     res.send("hello world");
}
exports.register=async(req,res)=>{
     try{
     const {name,email,password}=req.body;
        if(!name||!email||!password){
            throw new Error("all inputfeild is required");
        }
        const userExist=User.findOne({email});
        if(userExist==true){
            throw new Error("User already exist with this id");
        }

        const user=await User.create({
        name:name,
        email:email,
        password:password
        })
        res.status(201).json({
            success: true,
            message: "succeed",
            user
           })
      
     }
     catch(err){
        console.log(err);
        res.status(400).json({
           success: false,
           message: err.message,
       })
     }
}

exports.login=async(req,res)=>{
    try{
    const {name,email,password}=req.body;
    if(!name||!email||!password){
         throw new  Error("all input fields are required")

    }


        const userexist = await User.findOne({email:req.body.email});
        if(userexist==true){
             if(password==userexist.password){
                res.status(201).json({
                    success: true,
                    message: "User Logged in sucessfully",
        
                   })
                }
               else
               {
                res.status(400).json({
                    success: false,
                    message: "enter the correct Passowrd",
                })
               }
             }

         else
        {
            throw new Error("User is not registered")
        }
    }
    catch(err){
        res.status(400).json({
            success: false,
            message: err.message,
        })
    }

}