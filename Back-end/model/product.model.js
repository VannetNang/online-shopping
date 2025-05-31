import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      trim: true,
      maxLength: 255,
    },
    description: {
      type: String,
      required: [true, "Description is required!"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required!"],
    },
    image: {
      type: Array,
      required: [true, "Image is required!"],
    },
    category: {
      type: String,
      required: [true, "Category is required!"],
    },
    subCategory: {
      type: String,
      required: [true, "Sub-category is required!"],
    },
    sizes: {
      type: [String],
      required: [true, "Sizes must be selected!"],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    bestseller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
