import { Router } from "express";
import {
  getAllOrders,
  getUserOrder,
  orderByCOD,
  orderByStripe,
  updateOrderStatus,
} from "../controller/order.controller.js";

const orderRouter = Router();

orderRouter.post("/cod", orderByCOD);

orderRouter.post("/stripe", orderByStripe);

orderRouter.get("/", getAllOrders);

orderRouter.get("/:id", getUserOrder);

orderRouter.put("/:id", updateOrderStatus);

export default orderRouter;
