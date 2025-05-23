import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <section className="pt-[120px]">
        <Outlet />
      </section>

      <Footer />
    </>
  );
};

export default App;
