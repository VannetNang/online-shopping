import { assets } from "../assets/data.js";

const ProductNotFound = () => {
  return (
    <>
      <div className="col-span-full text-center text-gray-500 mt-10">
        <p className="text-lg font-semibold">No products found</p>
        <p className="text-sm mt-2">
          Try adjusting your filters or check back later for new arrivals.
        </p>
        <img
          src={assets.no_product_image}
          alt="No Products"
          className="w-40 mx-auto mt-6"
        />
      </div>
    </>
  );
};

export default ProductNotFound;
