import Product from "../model/product.model.js";
import User from "../model/user.model.js";

// @desc   GET all cart items
// @Route  GET  /api/v1/cart
export const getAllCartItems = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      return next(error);
    }

    res.json({
      success: true,
      message: "Fetched the cart data successfully!",
      data: {
        cart: user.cart,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc   ADD cart item to user's cart
// @Route  POST  /api/v1/cart
export const addCartItem = async (req, res, next) => {
  try {
    const { userId, productId, size } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      const error = new Error("Product not found!");
      error.statusCode = 404;
      return next(error);
    }

    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      return next(error);
    }

    let cartData = [...user.cart];

    const matchingItem = cartData.findIndex(
      (item) => item.productId === productId && item.size === size
    );

    if (matchingItem !== -1) {
      cartData[matchingItem].quantity += 1;
    } else {
      cartData.push({
        productId,
        size,
        quantity: 1,
      });
    }

    await User.findByIdAndUpdate(userId, { cart: cartData });

    const updatedUser = await User.findById(userId);

    res.status(201).json({
      success: true,
      message: "Product added successfully!",
      data: {
        cart: updatedUser.cart,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc   UPDATE specific user's quantity item
// @Route  PUT  /api/v1/cart
export const updateCartItem = async (req, res, next) => {
  try {
    const { userId, productId, size, quantity } = req.body;

    if (typeof quantity !== "number" || quantity < 0) {
      const error = new Error("Invalid quantity provided!");
      error.statusCode = 400; // Bad Request
      return next(error);
    }

    const product = await Product.findById(productId);

    if (!product) {
      const error = new Error("Product not found!");
      error.statusCode = 404;
      return next(error);
    }

    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      return next(error);
    }

    let cartData = [...user.cart];

    const matchingItem = cartData.findIndex(
      (item) => item.productId === productId && item.size === size
    );

    if (matchingItem !== -1) {
      cartData[matchingItem].quantity += quantity;
    } else {
      res.status(404).json({
        message: "Product not found!",
      });
    }

    await User.findByIdAndUpdate(userId, { cart: cartData });

    const updatedUser = await User.findById(userId);

    res.status(201).json({
      success: true,
      message: "Quantity updated successfully",
      data: {
        cart: updatedUser.cart,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc   DELETE specific user's cart item
// @Route  DELETE  /api/v1/user/cart
export const deleteCartItem = async (req, res, next) => {
  try {
    const { userId, productId, size } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      return next(error);
    }

    const cartItem = user.cart.filter(
      (item) => !(item.productId === productId && item.size === size)
    );

    await User.findByIdAndUpdate(userId, { cart: cartItem });

    const updatedUser = await User.findById(userId);

    res.json({
      success: true,
      message: "Delete product successfully!",
      data: {
        cart: updatedUser.cart,
      },
    });
  } catch (error) {
    next(error);
  }
};
