import { Router } from "express";
import {
  getAllOrders,
  getUserOrder,
  orderByCOD,
  orderByStripe,
  updateOrderStatus,
  verifyStripe,
} from "../controller/order.controller.js";
import {
  adminAuthorize,
  userAuthorize,
} from "../middleware/auth.middleware.js";

const orderRouter = Router();

orderRouter.post("/cod", userAuthorize, orderByCOD);

orderRouter.post("/stripe", userAuthorize, orderByStripe);

orderRouter.post("/verify", userAuthorize, verifyStripe);

orderRouter.get("/", adminAuthorize, getAllOrders);

orderRouter.get("/user", userAuthorize, getUserOrder);

orderRouter.put("/user", adminAuthorize, updateOrderStatus);

export default orderRouter;
