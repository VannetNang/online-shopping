import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/data.js";
import { useContext } from "react";
import { GlobalState } from "../context/Context.jsx";
import { toast } from "react-toastify";

const RightBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setVisibleSearch, quantity, token, setToken } =
    useContext(GlobalState);

  const handleSearchClick = () => {
    const pathname = location.pathname;

    if (pathname !== "/collection") {
      navigate("/collection");
    }

    setVisibleSearch(true);
  };

  const handleLogout = () => {
    navigate("/sign-in");
    setToken("");
    localStorage.removeItem("token");
    toast.success("You successfully logged out!");
  };

  return (
    <section className="flex-center gap-6 md:gap-8 lg:gap-10 pr-3">
      <div onClick={handleSearchClick} className="cursor-pointer">
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="w-[18px] lg:w-[22px]"
        />
      </div>

      <div className="relative group cursor-pointer">
        <img
          src={assets.profile_icon}
          alt="Profile Icon"
          className="w-[18px] lg:w-[22px]"
        />

        {/* Dropdown Menu */}
        {token && (
          <div className="hidden group-hover:flex flex-col absolute top-4 right-0 gap-3 w-40 lg:w-45 py-3 px-5 border bg-gray-100 rounded-lg text-light-gray z-10">
            <a
              className="cursor-pointer hover:text-black text-[16px] lg:text-lg"
              href="https://github.com/VannetNang/online-shopping"
              target="_blank"
            >
              Source Code
            </a>
            <p
              className="cursor-pointer hover:text-black text-[16px] lg:text-lg"
              onClick={() => navigate("/order")}
            >
              Orders
            </p>
            <p
              className="cursor-pointer hover:text-black text-[16px] lg:text-lg"
              onClick={handleLogout}
            >
              Logout
            </p>
          </div>
        )}
      </div>

      <div
        className="relative cursor-pointer"
        onClick={() => navigate("/cart")}
      >
        <img
          src={assets.cart_icon}
          alt="Cart Icon"
          className="w-[18px] lg:w-[22px]"
        />
        <span className="absolute top-3 -right-2 bg-black text-white text-xs rounded-full px-1.5 lg:text-[14px]">
          {quantity}
        </span>
      </div>

      {!token && (
        <button className="button" onClick={() => navigate("/sign-up")}>
          SIGN UP
        </button>
      )}
    </section>
  );
};

export default RightBar;
