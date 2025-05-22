# Online Shopping Management System (MERN Stack)

## Project Overview

This is a MERN (MongoDB, Express.js, React.js, Node.js) stack application designed to manage an online shopping experience for a **single, dedicated online store**. The system provides a robust administrative dashboard for store owners/sellers to manage their product inventory and a user-friendly frontend for customers to browse, purchase, and manage their orders.

## Key Features

### User-Facing Features

* **Homepage Product Display:**
    * Browse all available products.
    * View detailed product information (images, description, price, availability) with or without an account.
* **Authentication & Authorization:**
    * User Sign-up and Login.
    * Password hashing (using bcrypt) for secure authentication.
    * JSON Web Tokens (JWT) for secure session management.
* **Shopping Cart Functionality:**
    * Add products to a persistent shopping cart (requires user login).
    * View, update quantities, and remove items from the cart.
* **Checkout Process:**
    * Secure checkout flow (e.g., integration with payment gateways like Stripe/PayPal - *to be implemented*).
    * Order placement and confirmation.
* **User Dashboard:**
    * View order history.
    * Update user profile information.
* **Product Search & Filtering:**
    * Search for products by name, category, or keywords.
    * Filter products by price range, category, brand, etc.
* **Product Reviews & Ratings:**
    * Ability for logged-in users to leave reviews and ratings on purchased products.

### Admin Dashboard Features

* **Secure Admin Login:**
    * Dedicated login for store administrators/sellers.
    * Role-based access control (ensuring only authorized admins can access dashboard functionalities).
* **Product Management (CRUD):**
    * **Create:** Add new products to the store with details (name, description, price, category, stock quantity, images).
    * **Read:** View a list of all products.
    * **Update:** Edit existing product details.
    * **Delete:** Remove products from the store.
* **Order Management:**
    * View all placed orders.
    * Update order status (e.g., Pending, Processing, Shipped, Delivered, Cancelled).
    * View order details (items, customer info, shipping address).
* **User Management (Basic):**
    * View a list of registered users.
    * Ability to (potentially) block/unblock users or change user roles (e.g., if multiple admin levels are introduced).
* **Category Management:**
    * Add, edit, and delete product categories to help organize the store.
* **Analytics & Reporting (Basic):**
    * (Future consideration) Basic sales reports or product performance insights.

## Technologies Used

### Frontend
* **React.js:** A JavaScript library for building user interfaces.
* **Vite:** A fast build tool for modern web projects.
* **React Router DOM:** For client-side routing.
* **Axios / Fetch API:** For making HTTP requests to the backend.
* **State Management:** (e.g., React Context API, Redux, Zustand) - *Choose one based on project complexity.*
* **Styling:** (e.g., CSS Modules, Styled Components, Tailwind CSS, Material-UI) - *Choose your preferred styling solution.*

### Backend
* **Node.js:** JavaScript runtime environment.
* **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
* **MongoDB:** NoSQL database for storing application data.
* **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
* **bcrypt.js:** For hashing passwords.
* **jsonwebtoken:** For implementing JWT-based authentication.
* **dotenv:** For managing environment variables.
* **cors:** For handling Cross-Origin Resource Sharing.
* **express-validator:** For robust input validation.
* **Nodemon:** (Development dependency) For automatically restarting the server during development.

### Deployment (Future Considerations)
* **Frontend:** Netlify, Vercel, Render, AWS Amplify
* **Backend:** Render, Heroku, AWS EC2, DigitalOcean, Vercel (for serverless functions)
* **Database:** MongoDB Atlas

