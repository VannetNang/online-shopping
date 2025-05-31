import jwt from "jsonwebtoken";
import { JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD } from "../config/env.js";

export const adminAuthorize = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access!",
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded !== ADMIN_EMAIL + ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access!",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};
