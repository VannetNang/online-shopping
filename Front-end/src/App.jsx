import { assets } from "./assets/data.js";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <img src={assets.logo} alt="Test Logo" />
      <Outlet />
    </>
  );
};

export default App;
