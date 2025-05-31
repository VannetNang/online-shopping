import Product from "../model/product.model.js";
import { v2 as cloudinary } from "cloudinary";

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
      return next(error);
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
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (image) => image !== undefined
    );

    const imagesUrl = await Promise.all(
      images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image.path);
        return result.secure_url;
      })
    );

    const newProduct = await Product.create({
      name,
      description,
      price,
      image: imagesUrl,
      category,
      subCategory,
      sizes,
      bestseller,
    });

    res.status(201).json({
      success: true,
      message: "Product added successfully!",
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    UPDATE product by ID
// @route   PUT  /api/v1/products/:id
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (image) => image !== undefined
    );

    const imagesUrl = await Promise.all(
      images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image.path);
        return result.secure_url;
      })
    );

    // Add imagesUrl to req.body
    req.body.image = imagesUrl;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      const error = new Error("Product not found with this ID!");
      error.statusCode = 404;
      return next(error);
    }

    const updatedProduct = await Product.findById(id);

    res.status(201).json({
      success: true,
      message: "Product updated successfully!",
      data: updatedProduct,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    REMOVE product by ID
// @route   DELETE  /api/v1/products/:id
export const removeProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      const error = new Error("Product not found with this ID!");
      error.statusCode = 404;
      return next(error);
    }

    res.status(201).json({
      success: true,
      message: "Product deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};
