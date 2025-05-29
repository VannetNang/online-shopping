import User from "../model/user.model.js";

// @desc    create account
// @Route   POST   /api/v1/auth/sign-up
export const signUp = async (req, res, next) => {
  try {
    res.json({
      message: "Sign Up User",
    });
  } catch (error) {
    console.error(error.message);
  }
};

// @desc    login account
// @Route   POST   /api/v1/auth/sign-in
export const signIn = async (req, res, next) => {
  try {
    res.json({
      message: "Sign In User",
    });
  } catch (error) {
    console.error(error.message);
  }
};

// @desc    admin account
// @Route   POST   /api/v1/auth/admin/sign-in
export const adminSignIn = async (req, res, next) => {
  try {
    res.json({
      message: "Sign In Admin",
    });
  } catch (error) {
    console.error(error.message);
  }
};
