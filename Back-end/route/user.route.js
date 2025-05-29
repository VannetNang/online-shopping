import { Router } from "express";
import { adminSignIn, signIn, signUp } from "../controller/user.controller.js";

const userRouter = Router();

// User register
userRouter.post("/sign-up", signUp);

// User login
userRouter.post("/sign-in", signIn);

// Admin login
userRouter.post("/admin/sign-in", adminSignIn);

export default userRouter;
