# E-Commerce Platform Backend 🛍️

This repository contains the backend source code for a modern e-commerce platform, built with Node.js and Express. It's designed to support a MERN (MongoDB, Express, React, Node.js) stack application, providing a robust RESTful API for all necessary e-commerce functionalities.

---

## Key Features ✨

* **RESTful API**: A well-structured API for managing products, users, and orders.
* **Secure Authentication**: User authentication and authorization using JSON Web Tokens (JWT) and `bcrypt` for password hashing.
* **Product Management**: Full CRUD (Create, Read, Update, Delete) operations for products.
* **Image Uploads**: Handles product image uploads using `multer` and hosts them on **Cloudinary**.
* **Payment Integration**: Secure payment processing handled via the **Stripe** API.
* **MVC Architecture**: Follows the Model-View-Controller pattern for organized and scalable code.

---

## Tech Stack 🛠️

* **Framework**: Express.js
* **Database**: MongoDB with Mongoose ODM
* **Authentication**: JSON Web Tokens (JWT) & bcrypt
* **File Handling**: Multer & Cloudinary
* **Payment Gateway**: Stripe
* **Environment Variables**: Dotenv
* **CORS**: `cors` package

---

## Getting Started 🚀

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/VannetNang/online-shopping.git
    cd online-shopping
    cd backend
    ```

2.  **Install NPM packages:**
    ```bash
    npm install express bcrypt cloudinary cors dotenv jsonwebtoken mongodb mongoose multer nodemon stripe
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the necessary environment variables. See the `.env.example` section below.

4.  **Start the server:**
    This command will start the server with `nodemon`, which automatically restarts the application when file changes are detected.
    ```bash
    npm run dev
    ```
    The server will be running on `http://localhost:PORT`, where `PORT` is the value you set in your `.env` file.

---

## Environment Variables (.env.example)

Create a `.env` file in the root directory and add the following variables. Replace the placeholder values with your actual credentials.

```env
# Server Configuration
PORT=8000

# MongoDB Connection
MONGO_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=1d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# ADMIN Credentials
ADMIN_EMAIL=any_email
ADMIN_PASSWORD=any_password

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key