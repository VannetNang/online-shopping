import { useNavigate } from "react-router-dom";
import { assets } from "../assets/data.js";

const RightBar = () => {
  const navigate = useNavigate();

  return (
    <section className="flex-center gap-6 md:gap-8 lg:gap-10 pr-3">
      <img
        src={assets.profile_icon}
        alt="Profile Icon"
        className="w-[20px] lg:w-[26px]"
      />

      <div className="relative">
        <img
          src={assets.cart_icon}
          alt="Cart Icon"
          className="w-[20px] lg:w-[26px]"
        />
        <span className="absolute -top-1 -right-2 bg-red text-white text-xs rounded-full px-1.5 lg:text-[16px]">
          0
        </span>
      </div>

      <button className="button" onClick={() => navigate("/sign-up")}>
        Sign Up
      </button>
    </section>
  );
};

export default RightBar;
