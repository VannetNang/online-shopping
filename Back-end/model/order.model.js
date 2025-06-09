import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "User ID is required!"],
    },
    items: {
      type: Array,
      required: [true, "Items are required!"],
    },
    address: {
      type: Object,
      required: [true, "Address is required"],
    },
    amount: {
      type: Number,
      required: [true, "Total amount is required!"],
    },
    status: {
      type: String,
      default: "Order Placed",
      required: [true, "Status is required"],
    },
    paymentMethod: {
      type: String,
      required: [true, "Please select a payment method!"],
    },
    isPayment: {
      type: Boolean,
      default: false,
      required: [true, "Payment is required!"],
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
