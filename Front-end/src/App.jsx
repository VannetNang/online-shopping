import Home from "./pages/_root/Home";
import { assets } from "./assets/data.js";

const App = () => {
  return (
    <>
      <img src={assets.logo} alt="Test Logo" />
      <Home />
    </>
  );
};

export default App;
