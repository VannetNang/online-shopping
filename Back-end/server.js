import express from "express";
import cors from "cors";
import { PORT } from "./config/env.js";
import { conectToDatabase } from "./database/mongodb.js";

const app = express();

// Middle-ware
app.use(cors());

// API
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Backend API!" });
});

// Connection
app.listen(PORT, () => {
  conectToDatabase();
  console.log(`Server is running on http://localhost:${PORT}`);
});
