import { config } from "dotenv";

config({ path: ".env" });

export const {
  PORT,
  DATABASE_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
} = process.env;
