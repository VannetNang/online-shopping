import { Router } from "express";
import { adminAuthorize } from "../middleware/auth.middleware.js";
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

// For ADMIN ONLY
// @desc  ADD new product
productRouter.post(
  "/",
  adminAuthorize,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

// For ADMIN ONLY
// @desc  EDIT product
productRouter.put(
  "/:id",
  adminAuthorize,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  updateProduct
);

// For ADMIN ONLY
// @desc  DELETE product
productRouter.delete("/:id", adminAuthorize, removeProduct);

export default productRouter;
