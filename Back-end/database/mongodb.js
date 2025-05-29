import mongoose from "mongoose";
import { DATABASE_URI } from "../config/env.js";

if (!DATABASE_URI) {
  console.error("Error: DATABASE_URI is not defined!");
  process.exit(1);
}

export const conectToDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("Successfully connected to MongoDB Database!");
  } catch (error) {
    console.error("Error connecting to database: ", error);
    process.exit(1);
  }
};
