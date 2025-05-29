import express, { urlencoded } from "express";
import cors from "cors";
import { PORT } from "./config/env.js";
import { conectToDatabase } from "./database/mongodb.js";
import userRouter from "./route/user.route.js";

const app = express();

// Middle-ware
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));

// API
app.use("/api/v1/auth", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Backend API!" });
});

// Connection
app.listen(PORT, () => {
  conectToDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});
