import { createContext, useEffect, useState } from "react";
import { products } from "../assets/data.js";

export const GlobalState = createContext(null);

const Context = ({ children }) => {
  const [navActive, setNavActive] = useState("home");
  const [search, setSearch] = useState("");
  const [visibleSearch, setVisibleSearch] = useState(false);

  const value = {
    products,
    navActive,
    setNavActive,
    search,
    setSearch,
    visibleSearch,
    setVisibleSearch,
  };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default Context;
