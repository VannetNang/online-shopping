import { Router } from "express";
import upload from "../middleware/multer.middleware.js";
import {
  addProduct,
  getAllProducts,
  getSingleProduct,
  removeProduct,
  updateProduct,
} from "../controller/product.controller.js";

const productRouter = Router();

// Get all products
productRouter.get("/", getAllProducts);

// Get single product
productRouter.get("/:id", getSingleProduct);

// For ADMIN ONLY, add new product
productRouter.post(
  "/",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

// For ADMIN ONLY, edit product
productRouter.put(
  "/:id",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  updateProduct
);

// For ADMIN ONLY, delete product
productRouter.delete("/:id", removeProduct);

export default productRouter;
