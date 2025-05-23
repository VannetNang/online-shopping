import { useContext } from "react";
import { GlobalState } from "../context/Context";
import { NavLink } from "react-router-dom";

const CollectionBar = () => {
  const { navActive, setNavActive } = useContext(GlobalState);

  return (
    <ul className="hidden lg:flex gap-[3rem] text-lg font-[600]">
      <li>
        <NavLink to="/" onClick={() => setNavActive("home")}>
          <span>Home</span>
          {navActive === "home" && <hr className="border-t-2" />}
        </NavLink>
      </li>

      <li>
        <NavLink to="/collection" onClick={() => setNavActive("collection")}>
          <span>Collection</span>
          {navActive === "collection" && <hr className="border-t-2" />}
        </NavLink>
      </li>

      <li>
        <NavLink to="/about-us" onClick={() => setNavActive("about")}>
          <span>About</span>
          {navActive === "about" && <hr className="border-t-2" />}
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact-us" onClick={() => setNavActive("contact")}>
          <span>Contact</span>
          {navActive === "contact" && <hr className="border-t-2" />}
        </NavLink>
      </li>
    </ul>
  );
};

export default CollectionBar;
