import { useContext } from "react";
import { GlobalState } from "../context/Context";
import { NavLink } from "react-router-dom";

const CollectionBar = () => {
  const { navActive, setNavActive } = useContext(GlobalState);

  return (
    <ul className="hidden md:flex-center md:gap-[2.5rem] lg:gap-[3.5rem] md:text-sm lg:text-lg text-[#A3A3A3]">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "nav-text" : "nav-text-hover"}`
          }
        >
          <span>Home</span>
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
          <span>Collections</span>
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
          <span>About</span>
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
          <span>Contact</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default CollectionBar;
