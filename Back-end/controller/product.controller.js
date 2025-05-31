import mongoose from "mongoose";
import Product from "../model/product.model.js";

// @desc    GET all products
// @route   GET  /api/v1/products
export const getAllProducts = async (req, res, next) => {
  try {
    res.json({ message: "GET ALL PRODUCTS" });
  } catch (error) {
    next(error);
  }
};

// @desc    GET single product by ID
// @route   GET  /api/v1/products/:id
export const getSingleProduct = async (req, res, next) => {
  try {
    res.json({ message: "GET SINGLE PRODUCT" });
  } catch (error) {
    next(error);
  }
};

// @desc    CREATE product
// @route   POST  /api/v1/products
export const addProduct = async (req, res, next) => {
  try {
    res.json({ message: "ADD PRODUCT" });
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
