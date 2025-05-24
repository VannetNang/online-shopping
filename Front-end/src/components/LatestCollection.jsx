import { useContext, useEffect, useState } from "react";
import Title from "../elements/Title";
import ProductItem from "./ProductItem";
import { GlobalState } from "../context/Context";

const LatestCollection = () => {
  const { products } = useContext(GlobalState);
  const [latestProducts, setLastestProducts] = useState([]);

  useEffect(() => {
    try {
      if (products && products.length) {
        const tenProducts = products.slice(0, 10);
        setLastestProducts(tenProducts);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div>
        <Title text1={"LASTEST"} text2={"COLLECTIONS"} />

        <p className="text-center mt-4 text-sm lg:text-lg px-6 mb-8">
          Discover our latest collection of trendy and stylish clothing, crafted
          to elevate your wardrobe with comfort and elegance.
        </p>

        <div className="px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {latestProducts && latestProducts.length
            ? latestProducts.map((product, index) => (
                <div className="flex-center lg:block" key={index}>
                  <ProductItem
                    productId={product._id}
                    productImage={product.image[0]}
                    productName={product.name}
                    productPrice={product.price}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default LatestCollection;
