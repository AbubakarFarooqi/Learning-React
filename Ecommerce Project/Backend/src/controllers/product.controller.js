import asyncHandler from "../utlis/asyncHandler.js"
import uploadOnCloundinary from "../utlis/cloudinary.service.js";
import ApiError from "../utlis/ApiError.js";
import ApiResponse from "../utlis/ApiResponse.js";
import { Product } from "../models/product.model.js";



const registerProduct = asyncHandler(async(req,res)=>{
    
    
    const {name,price,detail,gender,rating,discountPercentage} = req.body;
    
    if (
        [name, String(price), detail,gender,String(rating),String(discountPercentage)].some((field) => {
            field?.trim() === "";
        })
    ) {
        throw new ApiError(400, "All fields are required");
    }
    
    const pictureLocalPath = req.files?.picture[0]?.path;
    console.log("Azan")
      
      if(!pictureLocalPath){
        throw new ApiError(400, "Image Local Path is not found");
      }

    const pictureUrl = await uploadOnCloundinary(pictureLocalPath);

    if(!pictureUrl){
        throw new ApiError(400, "Picture Uri not found");
    }

    const product = await Product.create({
        name,
        detail,
        price,
        picture: pictureUrl,
        gender,
        rating,
        discountPercentage
    });

    if (!product) {
        throw new ApiError(500, "Something went wrong while creating product");
      }

      return res
        .status(200)
        .json(new ApiResponse(201, product, "Product has been Registered"));

})


const getAllProducts = asyncHandler(async (req,res) => {
      const products = await Product.find({});
      if(!products){
        throw new ApiError(500, "error fetching products");
      }

      return res.
      json(new ApiResponse(200,products,"Products have been fecthed"));
});

export {
  registerProduct,
  getAllProducts
}