import { useContext } from "react";
import { GlobalState } from "../context/Context";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/data.js";

const BottomBar = () => {
  const { navActive, setNavActive } = useContext(GlobalState);

  return (
    <div className="fixed menu-mobile z-99">
      <NavLink
        to="/"
        className={`flex-col-center menu-mobile-hover gap-2 hover:mb-4 ${
          navActive === "home" && "menu-mobile-active"
        }`}
        onClick={() => setNavActive("home")}
      >
        <img src={assets.home} alt="Home" width={23} />
        <span>HOME</span>
      </NavLink>

      <NavLink
        to="/collection"
        className={`flex-col-center menu-mobile-hover gap-2 hover:mb-4 ${
          navActive === "collection" && "menu-mobile-active"
        }`}
        onClick={() => setNavActive("collection")}
      >
        <img src={assets.collection} alt="Collection" width={26} />
        <span>COLLECTIONS</span>
      </NavLink>

      <NavLink
        to="/about-us"
        className={`flex-col-center menu-mobile-hover gap-2 hover:mb-4 ${
          navActive === "about" && "menu-mobile-active"
        }`}
        onClick={() => setNavActive("about")}
      >
        <img src={assets.about_us} alt="About Us" width={28} />
        <span>ABOUT</span>
      </NavLink>

      <NavLink
        to="/contact-us"
        className={`flex-col-center menu-mobile-hover gap-2 hover:mb-4 ${
          navActive === "contact" && "menu-mobile-active"
        }`}
        onClick={() => setNavActive("contact")}
      >
        <img src={assets.contact_us} alt="Contact Us" width={26} />
        <span>CONTACT</span>
      </NavLink>
    </div>
  );
};

export default BottomBar;
