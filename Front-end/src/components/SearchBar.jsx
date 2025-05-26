import { useContext } from "react";
import { GlobalState } from "../context/Context";
import { assets } from "../assets/data";

const SearchBar = () => {
  const { visibleSearch, setVisibleSearch, setSearch } =
    useContext(GlobalState);

  return (
    <>
      {visibleSearch && (
        <div className="bg-gray-100 p-6 flex-center mt-[-3rem] lg:mt-[-1.6rem] mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border-y-1 border-l-1 w-1/2 p-2 outline-0 rounded-l-xl"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="border-r-1 border-y-1 rounded-r-xl p-3">
            <img src={assets.search_icon} alt="Search Icon" className="w-4" />
          </button>

          <img
            src={assets.cross_icon}
            alt="Cross Icon"
            className="ml-3 w-3 cursor-pointer"
            onClick={() => setVisibleSearch(false)}
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
