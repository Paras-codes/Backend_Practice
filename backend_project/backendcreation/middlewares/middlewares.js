const JWT=require('jsonwebtoken');

const jwAuth=(req,res,next)=>{
 const token=(req.cookies && req.cookies.token)||null;
   if(!token){
    return res.status(400).json({
        sucess: false,
        massage:'Not authourized '
    });  
   }

   try {
     const payload=JWT.verify(token,process.env.SECRET)
     req.user={id:payload.id,email:payload.email};
   } 
   catch (error) {

    return res.status(400).json({
        sucess: false,
        massage:error.message
    });

   }
   next();
}

module .exports=jwAuth