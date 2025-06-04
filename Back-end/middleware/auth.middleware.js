import jwt from "jsonwebtoken";
import { JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD } from "../config/env.js";
import User from "../model/user.model.js";

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

export const userAuthorize = async (req, res, next) => {
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

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access!",
      });
    }

    req.user = user;

    if (["POST", "PUT", "DELETE"].includes(req.method) && !req.body.userId) {
      req.body.userId = user._id;
    }

    next();
  } catch (error) {
    next(error);
  }
};
