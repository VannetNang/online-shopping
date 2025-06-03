import { useContext } from "react";
import { assets } from "../assets/assets";
import { GlobalState } from "../context/Context";

const Navbar = () => {
  const { setToken } = useContext(GlobalState);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <>
      <nav className="px-4 md:px-10 lg:px-18 py-2 border-b border-slate-300">
        <div className="flex-between">
          <img
            src={assets.logo}
            alt="Logo Icon"
            className="w-20 lg:w-30 xl:w-40"
          />

          <button
            className="bg-black text-white rounded-lg py-1.5 lg:py-2 px-4 lg:px-6 text-sm transition-all hover:opacity-85 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
