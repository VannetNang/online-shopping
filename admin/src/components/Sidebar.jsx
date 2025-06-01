import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="pl-4 md:pl-10 lg:pl-14 py-2 flex flex-col border-r border-slate-300 min-h-screen">
        <NavLink
          to="add-product"
          className="flex items-center gap-4 border border-slate-300 w-full py-2 rounded-l-lg px-3 mt-5"
        >
          <img src={assets.add_icon} alt="Add Icon" className="w-6" />
          <p className="hidden lg:flex text-[15px]">Add Items</p>
        </NavLink>

        <NavLink
          to="view-products"
          className="flex items-center gap-4 border border-slate-300 w-full py-2 rounded-l-lg px-3 mt-5"
        >
          <img src={assets.order_icon} alt="List Items Icon" className="w-6" />
          <p className="hidden lg:flex text-[15px]">List Items</p>
        </NavLink>

        <NavLink
          to="view-product-order"
          className="flex items-center gap-4 border border-slate-300 w-full py-2 rounded-l-lg px-3 mt-5"
        >
          <img src={assets.order_icon} alt="Order Icon" className="w-6" />
          <p className="hidden lg:flex text-[15px]">Orders</p>
        </NavLink>
      </aside>
    </>
  );
};

export default Sidebar;
