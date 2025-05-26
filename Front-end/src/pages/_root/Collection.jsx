import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../context/Context";
import { assets, products } from "../../assets/data.js";
import Title from "../../elements/Title";
import ProductItem from "../../components/ProductItem";
import ProductNotFound from "../../components/ProductNotFound.jsx";

const Collection = () => {
  const { products } = useContext(GlobalState);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  // For storing category data, when users click
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  // For storing sorting data, when users select
  const [sorting, setSorting] = useState("");

  const onPriceSorting = (e) => {
    setSorting(e.target.value);
  };

  const onCategoryToggle = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) =>
        prev.filter((product) => product !== e.target.value)
      );
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const onSubCategoryToggle = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) =>
        prev.filter((product) => product !== e.target.value)
      );
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const onFilterProducts = () => {
    let productsCopy = products.slice();

    try {
      if (category.length > 0) {
        productsCopy = productsCopy.filter((product) =>
          category.includes(product.category)
        );
      }

      if (subCategory.length > 0) {
        productsCopy = productsCopy.filter((product) =>
          subCategory.includes(product.subCategory)
        );
      }

      setFilterProducts(productsCopy);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onFilterProducts();
  }, [category, subCategory]);

  useEffect(() => {
    let copyProduct = products.slice();

    if (sorting === "low-high") {
      copyProduct = copyProduct.sort((a, b) => a.price - b.price);
    }

    if (sorting === "high-low") {
      copyProduct = copyProduct.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(copyProduct);
  }, [sorting]);

  return (
    <>
      <div className="md:flex px-4 lg:px-24">
        {/* Filter Category */}
        <div className="w-full md:max-w-60 mb-4">
          <div
            className="mb-6 flex items-center gap-2 cursor-pointer"
            onClick={() => setVisibleFilter(!visibleFilter)}
          >
            <p className="text-lg lg:text-xl mt-2"> FILTERS </p>

            <img
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
              className={`h-3 md:hidden ${visibleFilter && "rotate-90"} `}
            />
          </div>
          <div
            className={`border border-slate-300 px-5 py-3 md:flex flex-col gap-3 ${
              visibleFilter ? "flex" : "hidden"
            } `}
          >
            <p>CATEGORIES</p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input
                type="checkbox"
                value={"Men"}
                onChange={onCategoryToggle}
              />
              Men
            </p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input
                type="checkbox"
                value={"Women"}
                onChange={onCategoryToggle}
              />
              Women
            </p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input
                type="checkbox"
                value={"Kids"}
                onChange={onCategoryToggle}
              />
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
              <input
                type="checkbox"
                value={"Topwear"}
                onChange={onSubCategoryToggle}
              />
              Topwear
            </p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input
                type="checkbox"
                value={"Bottomwear"}
                onChange={onSubCategoryToggle}
              />
              Bottomwear
            </p>

            <p className="flex gap-2 text-light-gray text-sm">
              <input
                type="checkbox"
                value={"Winterwear"}
                onChange={onSubCategoryToggle}
              />
              Winterwear
            </p>
          </div>
        </div>

        {/* Collections Display */}
        <div className="flex-1 md:px-12">
          <div className="flex-between">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />

            {/* Sorting */}
            <div className="border border-slate-400 px-4 py-3 text-sm">
              <select
                className="outline-0"
                value={sorting}
                onChange={onPriceSorting}
              >
                <option value="relavent">Sort by: Relavant</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-4">
            {filterProducts && filterProducts.length ? (
              filterProducts.map((product, index) => (
                <ProductItem
                  key={index}
                  productId={product._id}
                  productName={product.name}
                  productImage={product.image[0]}
                  productPrice={product.price}
                />
              ))
            ) : (
              <ProductNotFound />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
