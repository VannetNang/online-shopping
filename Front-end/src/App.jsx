import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SearchBar from "./components/SearchBar.jsx";

const App = () => {
  return (
    <>
      <ToastContainer position="top-left" />
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
