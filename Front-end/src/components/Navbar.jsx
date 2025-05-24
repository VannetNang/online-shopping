import { NavLink } from "react-router-dom";
import { assets } from "../assets/data.js";
import CollectionBar from "../elements/CollectionBar.jsx";
import BottomBar from "../elements/BottomBar.jsx";
import RightBar from "../elements/RightBar.jsx";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray flex-between lg:h-[100px] h-[76px] md:px-3 lg:px-22 shadow-xl z-99">
      <NavLink to="/" className="pl-3">
        <img src={assets.logo} alt="Logo" className="lg:w-[140px] w-[90px]" />
      </NavLink>

      {/* Middle-side     (product collections) */}
      <CollectionBar />

      {/* Right-side      (including profile, cart, auth method) */}
      <RightBar />

      {/* Mobile screen   (product collections) */}
      <BottomBar />
    </nav>
  );
};

export default Navbar;
