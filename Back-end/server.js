import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const port = process.env.PORT || 8000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
