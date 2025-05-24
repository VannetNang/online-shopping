import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../context/Context";
import Title from "../elements/Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(GlobalState);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    try {
      if (products && products.length) {
        const bestProducts = products.filter((product) => product.bestseller);
        setBestSellers(bestProducts.slice(0, 5));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="mt-18">
        <Title text1={"BEST"} text2={"SELLERS"} />

        <p className="text-center mt-4 text-sm lg:text-lg px-6 mb-8 text-light-gray">
          Explore our best-selling products, loved by customers for their
          quality, style, and value. These top picks are must-haves for your
          wardrobe!
        </p>

        <div className="px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {bestSellers && bestSellers.length
            ? bestSellers.map((product, index) => (
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

export default BestSeller;
