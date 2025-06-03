import { createContext, useEffect, useState } from "react";
import axios from "axios";
import VITE_BACKEND_ENDPOINT from "../config/env";

export const GlobalState = createContext(null);

const Context = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
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
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const value = { token, setToken, fetchProducts, products, loading };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default Context;
