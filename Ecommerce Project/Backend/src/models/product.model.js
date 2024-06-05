import mongoose,{Schema} from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female"],
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
    },
    discountPercentage:{
        type:Number,
        required:true
    },

},{timestamps:true})

export const Product = mongoose.model("Product",productSchema)