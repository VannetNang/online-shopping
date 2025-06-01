import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <>
      <nav className="px-4 md:px-10 lg:px-18 py-2 border-b border-slate-300">
        <div className="flex-between">
          <img
            src={assets.logo}
            alt="Logo Icon"
            className="w-20 lg:w-30 xl:w-40"
          />

          <button className="bg-black text-white rounded-lg py-2 px-6 transition-all hover:opacity-85 cursor-pointer">
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
