import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please Provide Password"],
        trim:true
    },
    role:{
        type:String,
        enum:["Admin","User"],
        default:"User"
    },
    address:{
        type:String,
    },
    phone:{
        type:String,
    },

},{timestamps:true});


// middle ware

//.pre is hook
userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    next()

})

// mehtods

userSchema.methods.isCorrectPassword =  async function(password){
    console.log(password)
    console.log(this.password)
    return await bcrypt.compare(password,this.password) // return true or false
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id, // generated by monodb
            email: this.email,
            name: this.name,
            role: this.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User",userSchema);