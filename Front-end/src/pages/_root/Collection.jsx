import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../context/Context";
import { assets } from "../../assets/data.js";
import Title from "../../elements/Title";
import ProductItem from "../../components/ProductItem";

const Collection = () => {
  const { products } = useContext(GlobalState);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    try {
      if (products && products.length) {
        setFilterProducts(products);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="flex px-4 lg:px-24">
        {/* Filter Category */}
        <div className="w-full md:max-w-60">
          <p
            className="mb-6 flex items-center gap-2 cursor-pointer"
            onClick={() => setVisibleFilter(!visibleFilter)}
          >
            <p className="text-lg lg:text-xl mt-2"> FILTERS </p>

            <img
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
              className={`h-3 md:hidden ${visibleFilter && "rotate-90"} `}
            />
          </p>
          <div
            className={`border border-slate-300 px-5 py-3 md:flex flex-col gap-3 ${
              visibleFilter ? "flex" : "hidden"
            } `}
          >
            <p>CATEGORIES</p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input type="checkbox" value={"Men"} />
              Men
            </p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input type="checkbox" value={"Women"} />
              Women
            </p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input type="checkbox" value={"Kids"} />
              Kids
            </p>
          </div>

          <div
            className={`border border-slate-300 px-5 mt-6 py-3 md:flex flex-col gap-3 ${
              visibleFilter ? "flex" : "hidden"
            }`}
          >
            <p>TYPE</p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input type="checkbox" value={"Topwear"} />
              Topwear
            </p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input type="checkbox" value={"Bottomwear"} />
              Bottomwear
            </p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input type="checkbox" value={"Winterwear"} />
              Winterwear
            </p>
          </div>
        </div>

        {/* Collections Display */}
        <div className="flex-1 px-12">
          <div className="flex-between">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />

            {/* Sorting */}
            <div className="border border-slate-400 px-4 py-3 text-sm">
              <select className="outline-0">
                <option value="relavent">Sort by: Relavant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3">
            {filterProducts && filterProducts.length
              ? filterProducts.map((product, index) => (
                  <ProductItem
                    key={index}
                    productId={product._id}
                    productName={product.name}
                    productImage={product.image[0]}
                    productPrice={product.price}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
