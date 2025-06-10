import express from "express";
import cors from "cors";
import { PORT } from "./config/env.js";
import { conectToDatabase } from "./database/mongodb.js";
import userRouter from "./route/user.route.js";
import errorMiddleware from "./middleware/error.middleware.js";
import productRouter from "./route/product.route.js";
import connectToCloudinary from "./config/cloudinary.js";
import cartRouter from "./route/cart.route.js";
import orderRouter from "./route/order.route.js";

const app = express();

// Middle-ware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/user/cart", cartRouter);
app.use("/api/v1/place-order", orderRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Backend API!" });
});

// Error handler middleware (should be the last middleware)
app.use(errorMiddleware);

// Connection
app.listen(PORT, () => {
  connectToCloudinary();
  conectToDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});
