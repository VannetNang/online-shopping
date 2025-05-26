import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { useEffect } from "react";

const App = () => {
  return (
    <>
      <Navbar />

      <section className="pt-[8rem]">
        <SearchBar />

        <Outlet />
      </section>

      <Footer />
    </>
  );
};

export default App;
