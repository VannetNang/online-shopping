import { createContext, useEffect, useState } from "react";

export const GlobalState = createContext(null);

const Context = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const value = { token, setToken };

  return <GlobalState.Provider value={value}>{children}</GlobalState.Provider>;
};

export default Context;
