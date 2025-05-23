import { useContext } from "react";
import { GlobalState } from "../context/Context";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/data.js";

const BottomBar = () => {
  const { navActive, setNavActive } = useContext(GlobalState);

  return (
    <div className="menu-mobile">
      <NavLink
        to="/"
        className={`flex-col-center menu-mobile-hover ${
          navActive === "home" && "menu-mobile-active"
        }`}
        onClick={() => setNavActive("home")}
      >
        <img src={assets.home} alt="Home" width={23} />
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/collection"
        className={`flex-col-center menu-mobile-hover ${
          navActive === "collection" && "menu-mobile-active"
        }`}
        onClick={() => setNavActive("collection")}
      >
        <img src={assets.collection} alt="Collection" width={26} />
        <span>Collection</span>
      </NavLink>

      <NavLink
        to="/about-us"
        className={`flex-col-center menu-mobile-hover ${
          navActive === "about" && "menu-mobile-active"
        }`}
        onClick={() => setNavActive("about")}
      >
        <img src={assets.about_us} alt="About Us" width={28} />
        <span>About</span>
      </NavLink>

      <NavLink
        to="/contact-us"
        className={`flex-col-center menu-mobile-hover ${
          navActive === "contact" && "menu-mobile-active"
        }`}
        onClick={() => setNavActive("contact")}
      >
        <img src={assets.contact_us} alt="Contact Us" width={26} />
        <span>Contact</span>
      </NavLink>
    </div>
  );
};

export default BottomBar;
