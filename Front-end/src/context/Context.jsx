import { createContext, useEffect, useState } from "react";
import VITE_BACKEND_ENDPOINT from "../config/env.js";
import axios from "axios";

export const GlobalState = createContext(null);

const Context = ({ children }) => {
  const [navActive, setNavActive] = useState("home");
  const [search, setSearch] = useState("");
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${VITE_BACKEND_ENDPOINT}/products`);

      const data = await response.data;

      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Adding products to the cart
  const handleCartItem = (id, size) => {
    let existingItem = cartItems.find(
      (item) => item._id === id && item.size === size
    );

    const findProduct = products.find((product) => product._id === id);

    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          _id: id,
          size,
          name: findProduct.name,
          price: findProduct.price,
          image: findProduct.image[0],
          quantity: 1,
        },
      ]);
    }

    setQuantity((prev) => prev + 1);
  };

  // Updates the quantity of an item
  const updateCartItemQuantity = (id, size, quantity) => {
    setCartItems((prev) => {
      const updatedCartItems = prev.map((item) =>
        item._id === id && item.size === size
          ? { ...item, quantity: Number(quantity) }
          : item
      );

      const totalQuantity = updatedCartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setQuantity(totalQuantity);

      return updatedCartItems;
    });
  };

  // Delete specific item from the cart
  const deleteItem = (id, size) => {
    const item = cartData.find((item) => item._id === id && item.size === size);

    if (item) {
      setCartData(cartData.filter((item) => item.size !== size));
    }
  };

  const value = {
    products,
    quantity,
    setQuantity,
    navActive,
    setNavActive,
    search,
    setSearch,
    visibleSearch,
    setVisibleSearch,
    handleCartItem,
    cartItems,
    updateCartItemQuantity,
    deleteItem,
    paymentMethod,
    setPaymentMethod,
    loading,
  };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default Context;
