import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
} from "../config/env.js";

// @desc    create account
// @Route   POST   /api/v1/auth/sign-up
export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("Email already exists!");
      error.statusCode = 409;
      next(error);
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: { token, newUser },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    login account
// @Route   POST   /api/v1/auth/sign-in
export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error("User does not exist!");
      error.statusCode = 404;
      next(error);
    }

    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword) {
      const error = new Error("Password is incorrect!");
      error.statusCode = 401;
      next(error);
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.json({
      success: true,
      message: "User login successfully!",
      data: { token, user },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    admin account
// @Route   POST   /api/v1/auth/admin/sign-in
export const adminSignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, JWT_SECRET);

      res.json({
        success: true,
        message: "Admin login successfully!",
        data: {
          token,
        },
      });
    } else {
      const error = new Error("Invalid credentials!");
      error.statusCode = 401;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};
