const User=require('../model/user_schema.js')
exports.home=(req,res)=>{
    res.send("hello world");
}

exports.createUser=async (req,res)=>{
    1.// extract info jo frontend se lekke aaygi 
        try{
           const {name,email}=req.body
           if(!name||!email){
               throw new Error("Name and email required");
           }
           const userExist=User.findOne({email});
           if(userExist==true){
            throw new Error("user already exist with this email");
           }

           const user=await User.create({
            name,
            email
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
exports.getUser=async(req,res)=>{
    try{
      const users=await User.find({})
      res.status(200).json({
        success:true,
        users

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
// delete k liye user se apan 2 types se  data lete h 
// 1. body
// 2. url
//3.routes m bhi id hi likhna aur agar userid likhrai ho to path m bhi user id jaigi  
exports.deleteUser=async(req,res)=>{
      try{
        const user_id=req.params.id 
        //url info k liye by params id ko hamesa same rakhna routes k liye 
        const user=User.findByIdAndDelete(user_id);
        res.status(200).json({
            success:true,
             message:"User deleted succesfully"
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
exports.updteUser=async(req,res)=>{
    try{
      const user_id=req.params.id
      const updated_USer=req.body;  //url info k liye
      const user=User.findByIdAndUpdate(user_id,updated_USer);
      res.status(200).json({
          success:true,
          message:"user updated sucessfully",
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