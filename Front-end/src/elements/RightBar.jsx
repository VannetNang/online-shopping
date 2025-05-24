import { useNavigate } from "react-router-dom";
import { assets } from "../assets/data.js";

const RightBar = () => {
  const navigate = useNavigate();

  return (
    <section className="flex-center gap-6 md:gap-8 lg:gap-10 pr-3">
      <div className="relative group cursor-pointer">
        <img
          src={assets.profile_icon}
          alt="Profile Icon"
          className="w-[20px] lg:w-[26px]"
        />

        {/* Dropdown Menu */}
        <div className="hidden group-hover:flex flex-col absolute top-5 right-0 gap-4 lg:gap-6 w-34 py-3 px-3 border bg-slate-100 rounded-lg text-light-gray z-10">
          <p
            className="cursor-pointer hover:text-black"
            onClick={() => navigate("/profile")}
          >
            MY PROFILE
          </p>
          <p
            className="cursor-pointer hover:text-black"
            onClick={() => navigate("/order")}
          >
            ORDERS
          </p>
          <p className="cursor-pointer hover:text-black">LOGOUT</p>
        </div>
      </div>

      <div className="relative cursor-pointer">
        <img
          src={assets.cart_icon}
          alt="Cart Icon"
          className="w-[20px] lg:w-[26px]"
        />
        <span className="absolute top-4 -right-2 bg-black text-white text-xs rounded-full px-1.5 lg:text-[16px]">
          0
        </span>
      </div>

      <button className="button" onClick={() => navigate("/sign-up")}>
        SIGN UP
      </button>
    </section>
  );
};

export default RightBar;
