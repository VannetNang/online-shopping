import { Router } from "express";
import {
  getAllCartItems,
  addCartItem,
  updateCartItem,
  deleteCartItem,
} from "../controller/cart.controller.js";
import { userAuthorize } from "../middleware/auth.middleware.js";

const cartRouter = Router();

// Get all cart items
cartRouter.get("/", userAuthorize, getAllCartItems);

// Add product to the cart
cartRouter.post("/", userAuthorize, addCartItem);

// Update that cart item by increasing or decreasing the quantity
cartRouter.put("/", userAuthorize, updateCartItem);

// Delete that product item
cartRouter.delete("/", userAuthorize, deleteCartItem);

export default cartRouter;
