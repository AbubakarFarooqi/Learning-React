import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { getAllProducts, registerProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.route("/register").post(
    upload.fields([
        {
          name: "picture",
          maxCount: 1,
        },
      ]),
      registerProduct
)

productRouter.route("/get-all").get(
    getAllProducts
)
export default productRouter