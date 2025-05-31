import Product from "../model/product.model.js";
import cloudinary from "../config/cloudinary.js";

// @desc    GET all products
// @route   GET  /api/v1/products
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});

    res.json({
      success: true,
      message: "Fetching data successfully!",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    GET single product by ID
// @route   GET  /api/v1/products/:id
export const getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      const error = new Error("Product not found with this ID!");
      error.statusCode = 404;
      next(error);
    }

    res.json({
      success: true,
      message: "Fetching data successfully!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    CREATE product
// @route   POST  /api/v1/products
export const addProduct = async (req, res, next) => {
  try {
    const image1 = req.files.image1;
    console.log(image1);
  } catch (error) {
    next(error);
  }
};

// @desc    UPDATE product by ID
// @route   PUT  /api/v1/products/:id
export const updateProduct = async (req, res, next) => {
  try {
    res.json({ message: "UPDATE PRODUCT" });
  } catch (error) {
    next(error);
  }
};

// @desc    REMOVE product by ID
// @route   DELETE  /api/v1/products/:id
export const removeProduct = async (req, res, next) => {
  try {
    res.json({ message: "DELETE PRODUCT" });
  } catch (error) {
    next(error);
  }
};
