# Front-End Application

This folder contains the source code and configuration for the front-end of our application. It is built using [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).

## Overview

This front-end application allows users to interact with our e-commerce platform. Users can browse through a variety of products, add selected products to their shopping cart, and proceed through a checkout process to complete their purchases. It provides the primary interface for all customer-facing activities.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Key Technologies](#key-technologies)
- [Contributing](#contributing)
- [License](#license)

## Folder Structure

The main source code resides in the `src` directory. Here's an overview of the key directories and files:
```plaintext
Front-end/
├── node_modules/         # Project dependencies
├── src/                  # Main source code
│   ├── assets/           # Static assets (images, icons, etc.)
│   ├── components/       # Reusable UI components (e.g., Navbars, Cards, Modals)
│   ├── context/          # React Context API for state management
│   ├── elements/         # Small elements to call in components file
│   ├── pages/            # Page-level components, often mapped to routes
│   │   ├── _auth/        # Authentication related pages (e.g., Login, Register)
│   │   ├── _error/       # Error display pages (e.g., 404 Not Found)
│   │   ├── _root/        # Root layout or structure for pages
│   ├── services/         # API calls, external service integrations 
│   ├── App.jsx           # Main application component (root of the React tree)
│   ├── index.css         # Global styles for CSS
│   └── main.jsx          # Application entry point (renders App.jsx)
├── .gitignore            # Specifies intentionally untracked files for Git
├── eslint.config.js      # ESLint configuration for code linting
├── index.html            # Main HTML template for the SPA
├── package-lock.json     # Exact versions of dependencies
├── package.json          # Project metadata and dependencies
├── README.md             # This file
└── vite.config.js        # Vite configuration file
<<<<<<< HEAD

=======
```
>>>>>>> 4de7eb09387b13abc66e6a64869dc1a9553ca471

## Getting Started

Follow these instructions to get a local copy up and running for development and testing.

### Prerequisites

* Node.js (version [**<- This project uses Node.js version 22.14.0, e.g., >=18.x ->**] or check `.nvmrc` if you have one)
* npm or yarn (or pnpm) - This project uses [**<- npm version 10.9.2 ->**] as indicated by `package-lock.json`.

### Installation

1.  **Navigate to the `Front-end` directory:**
    ```bash
    cd /Front-end
    ```

2.  **Install dependencies:**
    ```bash
    # Using npm
    npm install

    # Or if you use yarn
    # yarn install

    # Or if you use pnpm
    # pnpm install
    ```

3.  **Install frameworks / libraries:**
    ```bash
    # Using npm
    npm install react-router-dom toastify axios tailwindcss @tailwindcss/vite

    # Or if you use yarn
    # yarn install react-router-dom toastify axios tailwindcss @tailwindcss/vite

    # Or if you use pnpm
    # pnpm install react-router-dom toastify axios tailwindcss @tailwindcss/vite
    ```

* In case, tailwindcss installation does not work: Go to this [TailwindCSS Installation](https://tailwindcss.com/docs/installation/using-vite)


## Key Technologies

* **React:** A JavaScript library for building user interfaces.
* **Vite:** A modern front-end build tool that significantly improves the development experience.
* **JavaScript (ES6+):** Core programming language.
* **CSS:** For styling, TailwindCSS
* **ESLint:** For code linting and maintaining code quality.
* **React Router DOM:** For client-side routing.
* **React Toastify:** For displaying messages on the browser.
* **Axios / Fetch API:** For making HTTP requests to the backend.
* **State Management:** (React Context API)

## Contributing

We welcome contributions that add features or address anything currently lacking in the project! If you'd like to contribute, please follow these steps:

1.  **Fork the Project:**
    Click the 'Fork' button at the top right of the repository page to create your own copy.

2.  **Create your Feature Branch:**
    Navigate to your forked repository and create a new branch for your changes. It's good practice to name your branch descriptively (e.g., `git checkout -b feature/AmazingFeature` or `git checkout -b fix/BugFix`).

3.  **Commit your Changes:**
    Make your desired changes to the codebase. Commit your changes with clear and concise commit messages:
    ```bash
    git commit -m 'Add: Implement AmazingFeature'
    ```

4.  **Push to Your Branch:**
    Push your changes to your forked repository's branch:
    ```bash
    git push origin feature/AmazingFeature
    ```

5.  **Open a Pull Request:**
    Go to the original project repository and you should see a prompt to create a Pull Request from your new branch. Click it, provide a clear title and description for your changes, and submit the Pull Request.

Your Pull Request will then be reviewed, and a decision will be made on whether to accept and merge the changes. We appreciate your efforts to improve the project!
