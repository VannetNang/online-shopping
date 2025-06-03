import { useContext } from "react";
import { GlobalState } from "../../context/Context";
import { assets } from "../../assets/assets";

const ViewProducts = () => {
  const { products, loading } = useContext(GlobalState);

  if (loading) {
    return (
      <div className="px-8 lg:px-22 py-10">
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <>
      <div className="px-8 lg:px-22 py-10">
        <p>All Products List</p>

        <div>
          {products && products.length ? (
            <div>
              {/* Header */}
              <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center w-full bg-slate-100 p-1.5 mt-3 text-[14px]">
                <p className="font-medium pl-1">Image</p>
                <p className="font-medium">Name</p>
                <p className="font-medium">Category</p>
                <p className="font-medium">Price</p>
                <p className="font-medium text-center">Action</p>
              </div>

              {/* All products displayed */}
              {products.map((product) => (
                <div
                  key={product._id}
                  className="grid grid-cols-[1fr_3fr_1fr] gap-2 md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center w-full border border-slate-300 mt-3 text-light-gray text-sm"
                >
                  <img
                    src={product.image[0]}
                    alt="Product Image"
                    className="w-18 p-2"
                  />
                  <p>{product.name}</p>
                  <p>{product.category}</p>
                  <p className="pl-2 mb-2 md:mb-0">${product.price}</p>
                  <div className="flex justify-end items-center gap-6 md:flex-around md:gap-0 mb-2 md:mb-0 md:pr-2">
                    <img
                      src={assets.edit_icon}
                      alt="Edit Icon"
                      className="cursor-pointer w-8 md:w-10"
                    />
                    <p className="cursor-pointer text-xl md:text-2xl">X</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            "No products found"
          )}
        </div>
      </div>
    </>
  );
};

export default ViewProducts;
