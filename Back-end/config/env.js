import { config } from "dotenv";

config({ path: ".env" });

export const {
  PORT,
  DATABASE_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  CLOUDINARY_NAME,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_API_KEY,
} = process.env;
