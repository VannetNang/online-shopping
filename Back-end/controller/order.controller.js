import Stripe from "stripe";
import Order from "../model/order.model.js";
import User from "../model/user.model.js";
import { STRIPE_SECRET_KEY } from "../config/env.js";

// Stripe Payment Gateway Initialize
const stripe = new Stripe(STRIPE_SECRET_KEY);

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

    const { origin } = req.headers;

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
      isPayment: false,
    });

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    lineItems.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Fee",
        },
        unit_amount: 10 * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${origin}/verify?success=true&orderId=${order._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${order._id}`,
      line_items: lineItems,
    });

    res.status(201).json({
      success: true,
      session_url: session.url,
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Verify if stripe payment is success or not
// @route  POST  /api/v1/place-order/verify
export const verifyStripe = async (req, res, next) => {
  try {
    const { userId, orderId, success } = req.body;

    if (success === "true") {
      await Order.findByIdAndUpdate(orderId, { isPayment: true });

      await User.findByIdAndUpdate(userId, { cart: [] });

      res.status(201).json({
        success: true,
        message: "Payment paid successfully!",
      });
    } else {
      await Order.findByIdAndDelete(orderId);

      res.status(201).json({
        success: false,
        message: "Payment cancel successfully!",
      });
    }
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
// @route  GET  /api/v1/place-order/user
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
// @route  PUT  /api/v1/place-order/user
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { itemId, status } = req.body;

    const order = await Order.findById(itemId);

    if (!order) {
      const error = new Error("Item not found!");
      error.statusCode = 404;
      return next(error);
    }

    await Order.findByIdAndUpdate(itemId, { status });

    const updatedOrder = await Order.findById(itemId);

    res.status(201).json({
      success: true,
      data: updatedOrder,
    });
  } catch (error) {
    next(error);
  }
};
