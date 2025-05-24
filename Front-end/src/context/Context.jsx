import { createContext, useState } from "react";
import { products } from "../assets/data.js";

export const GlobalState = createContext(null);

const Context = ({ children }) => {
  const [navActive, setNavActive] = useState("home");
  
  const value = {
    products,
    navActive,
    setNavActive,
  };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default Context;
