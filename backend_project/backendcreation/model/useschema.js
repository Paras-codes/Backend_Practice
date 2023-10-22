const mongoose=require('mongoose');
const bcrypt=require("bcrypt")
const JWT=require('jsonwebtoken')
const {Schema}=mongoose

const userSchema=new Schema({
      name:{
        type:String,
        required:[true,'username is required'],
        minLength:[5,'name should be minimum of 5 character'],
        maxLength:[50,'name should be maximum of 50 character'],
        trim:true
      },
      email:{
        type:String,
        required:[true,'email is required'],
        unique:[true,'email already exist'],
        lowercase:true

      },
      password:{
        type:String,
        select:false
      },
      forgotpasswordtoken:{
        type:String,
        select:false
      },
     forgotpasswordexpire:{
            type:Date,
      }
      },
        {
            
            timestamps:Date
});
userSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    return next();
  }
  this.password= await bcrypt.hash(this.password,10);
  return next();
})


userSchema.methods={
    jwtToken(){
        return JWT.sign(
          // this is a custom method to generate token 
         {id: this._id,email:this.email},
         process.env.SECRET,//a custom token that is already defined in env
         {expiresIn:'24h'}//tells when the tocken will expire in this case it is 24 hours
         )
    }
}
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;