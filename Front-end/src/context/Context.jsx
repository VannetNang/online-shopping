import React, { createContext, useState } from "react";

export const GlobalState = createContext(null);

const Context = ({ children }) => {
  const [test, setTest] = useState("Hello World");

  const value = {
    test,
    setTest,
  };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default Context;
