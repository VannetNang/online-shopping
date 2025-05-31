import { Router } from "express";
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
productRouter.post("/", addProduct);

// For ADMIN ONLY, edit product
productRouter.put("/:id", updateProduct);

// For ADMIN ONLY, delete product
productRouter.delete("/:id", removeProduct);

export default productRouter;
