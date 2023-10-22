import mongoose from "mongoose";

const userSchema =  new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Name is required'],
            maxlength:[50,"name should be less than 50 words"]
            },
            email:{
                type:String,
                unique:true
            },
            username: {
                type:String,
                unique:true
            },
            password: String,
            age:Number,
        }
    
)

export default mongoose.model("user",userSchema)