import { useContext, useEffect } from "react";
import { GlobalState } from "../context/Context";
import { NavLink, useLocation } from "react-router-dom";

const CollectionBar = () => {
  const { setNavActive } = useContext(GlobalState);

  return (
    <ul className="hidden md:flex-center gap-[2.5rem] md:text-sm text-light-gray">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "nav-text" : "nav-text-hover"}`
          }
        >
          <span>HOME</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/collection"
          onClick={() => setNavActive("collection")}
          className={({ isActive }) =>
            `${isActive ? "nav-text" : "nav-text-hover"}`
          }
        >
          <span>COLLECTION</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about-us"
          onClick={() => setNavActive("about")}
          className={({ isActive }) =>
            `${isActive ? "nav-text" : "nav-text-hover"}`
          }
        >
          <span>ABOUT</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact-us"
          onClick={() => setNavActive("contact")}
          className={({ isActive }) =>
            `${isActive ? "nav-text" : "nav-text-hover"}`
          }
        >
          <span>CONTACT</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default CollectionBar;
