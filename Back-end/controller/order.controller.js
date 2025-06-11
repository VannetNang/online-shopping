import Order from "../model/order.model.js";
import User from "../model/user.model.js";

// @desc   Create order by using COD method
// @route  POST  /api/v1/place-order/cod
export const orderByCOD = async (req, res, next) => {
  try {
    const { userId, items, address, amount } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      return next(error);
    }

    const order = await Order.create({
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
    });

    await User.findByIdAndUpdate(userId, { cart: [] });

    res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Create order by using Stripe method
// @route  POST  /api/v1/place-order/stripe
export const orderByStripe = async (req, res, next) => {
  try {
    const { userId, items, address, amount } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      return next(error);
    }

    const order = await Order.create({
      userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe",
      isPayment: true,
    });

    await User.findByIdAndUpdate(userId, { cart: [] });

    res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

// ADMIN ONLY
// @desc   View all orders placed by users
// @route  GET  /api/v1/place-order
export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({});

    if (!orders) {
      const error = new Error("No orders yet!");
      error.statusCode = 404;
      return next(error);
    }

    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Show specific order product to display on user's frontend
// @route  GET  /api/v1/place-order/:id
export const getUserOrder = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;

    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      return next(error);
    }

    const userOrder = await Order.find({ userId });

    res.status(201).json({
      success: true,
      data: userOrder,
    });
  } catch (error) {
    next(error);
  }
};

// ADMIN ONLY
// @desc   Update user's order status (Delivering, Arrived, ...)
// @route  PUT  /api/v1/place-order/:id
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { userId, status } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      return next(error);
    }

    await Order.findOneAndUpdate({ userId }, { status });

    const updatedOrder = await Order.findOne({ userId });

    res.status(201).json({
      success: true,
      data: updatedOrder,
    });
  } catch (error) {
    next(error);
  }
};
