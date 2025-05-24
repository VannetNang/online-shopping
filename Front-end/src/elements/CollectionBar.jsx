import { useContext } from "react";
import { GlobalState } from "../context/Context";
import { NavLink } from "react-router-dom";

const CollectionBar = () => {
  const { navActive, setNavActive } = useContext(GlobalState);

  return (
    <ul className="hidden md:flex-center md:gap-[2.5rem] lg:gap-[3.5rem] md:text-sm lg:text-lg text-light-gray">
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
          <span>COLLECTIONS</span>
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
