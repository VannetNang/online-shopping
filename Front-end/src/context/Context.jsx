import { createContext, useEffect, useState } from "react";
import VITE_BACKEND_ENDPOINT from "../config/env.js";
import axios from "axios";
import { toast } from "react-toastify";

export const GlobalState = createContext(null);

const Context = ({ children }) => {
  const [navActive, setNavActive] = useState("home");
  const [search, setSearch] = useState("");
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    getAllCartItems();
  }, [token]);

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

  const getAllCartItems = async () => {
    if (token) {
      try {
        setLoading(true);

        const response = await axios.get(`${VITE_BACKEND_ENDPOINT}/user/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.data;

        if (data.success) {
          const cartData = data.data.cart;
          const totalQuantity = cartData.reduce(
            (total, item) => total + item.quantity,
            0
          );

          setQuantity(totalQuantity);
          setCartItems(cartData);
        }
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  // Adding products to the cart
  const addCartItem = async (productId, size) => {
    if (token) {
      try {
        const response = await axios.post(
          `${VITE_BACKEND_ENDPOINT}/user/cart`,
          { productId, size },
          { headers: { Authorization: `Bearer: ${token}` } }
        );

        const data = await response.data;

        if (data.success) {
          let existingItem = cartItems.find(
            (item) => item.productId === productId && item.size === size
          );

          if (existingItem) {
            setCartItems((prev) =>
              prev.map((item) =>
                item.productId === productId && item.size === size
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            );
          } else {
            setCartItems((prev) => [
              ...prev,
              {
                productId,
                size,
                quantity: 1,
              },
            ]);
          }

          setQuantity((prev) => prev + 1);
          toast.success(data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    } else {
      // Handle non-logged in users
      let existingItem = cartItems.find(
        (item) => item.productId === productId && item.size === size
      );

      if (existingItem) {
        setCartItems((prev) =>
          prev.map((item) =>
            item.productId === productId && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCartItems((prev) => [
          ...prev,
          {
            productId,
            size,
            quantity: 1,
          },
        ]);
      }

      setQuantity((prev) => prev + 1);
      toast.success("Item added to cart");
    }
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
  const deleteItem = async (productId, size) => {
    if (token) {
      try {
        const response = await axios.delete(
          `${VITE_BACKEND_ENDPOINT}/user/cart`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: { productId, size },
          }
        );

        const data = await response.data;

        if (data.success) {
          setCartItems((prev) =>
            prev.filter(
              (item) => !(item.productId === productId && item.size === size)
            )
          );

          // Update total quantity
          setQuantity((prev) => {
            const removedItem = cartItems.find(
              (item) => item.productId === productId && item.size === size
            );
            return prev - (removedItem?.quantity || 0);
          });

          toast.success(data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.message);
      }
    } else {
      // Handle non-logged in users
      setCartItems((prev) =>
        prev.filter(
          (item) => !(item.productId === productId && item.size === size)
        )
      );

      // Update total quantity for non-logged in users
      setQuantity((prev) => {
        const removedItem = cartItems.find(
          (item) => item.productId === productId && item.size === size
        );
        return prev - (removedItem?.quantity || 0);
      });

      toast.success("Item removed from cart");
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
    addCartItem,
    cartItems,
    setCartItems,
    updateCartItemQuantity,
    deleteItem,
    paymentMethod,
    setPaymentMethod,
    total,
    setTotal,
    loading,
    setLoading,
    token,
    setToken,
    getAllCartItems,
  };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default Context;
