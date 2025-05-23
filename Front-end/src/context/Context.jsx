import React, { createContext, useState } from "react";

export const GlobalState = createContext(null);

const Context = ({ children }) => {
  const [navActive, setNavActive] = useState("home");

  const value = {
    navActive,
    setNavActive,
  };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default Context;
