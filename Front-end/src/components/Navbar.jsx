import { NavLink } from "react-router-dom";
import { assets } from "../assets/data.js";
import CollectionBar from "../elements/CollectionBar.jsx";
import BottomBar from "../elements/BottomBar.jsx";
import RightBar from "../elements/RightBar.jsx";

const Navbar = () => {
  return (
    <nav className="bg-gray flex-between lg:h-[90px] h-[70px] lg:px-5">
      <NavLink to="/" className="pl-3">
        <img src={assets.logo} alt="Logo" className="lg:w-[140px] w-[100px]" />
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
