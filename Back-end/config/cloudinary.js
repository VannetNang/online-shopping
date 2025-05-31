import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "./env.js";

const connectToCloudinary = async () => {
  try {
    await cloudinary.config({
      cloud_name: CLOUDINARY_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    });

    console.log("Successfully connected Cloudinary!");
  } catch (error) {
    console.error("Error connecting to Cloudinary:", error.message);
    process.exit(1);
  }
};

export default connectToCloudinary;
