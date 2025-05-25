import { useContext, useEffect, useState } from "react";
import Title from "../elements/Title";
import { GlobalState } from "../context/Context";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ subCategory }) => {
  const { products } = useContext(GlobalState);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    let copyProducts;

    try {
      copyProducts = products.slice();

      copyProducts = copyProducts.filter((products) =>
        products.subCategory.includes(subCategory)
      );

      const slicingProducts = copyProducts.slice(0, 5);

      setRelatedProducts(slicingProducts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div>
        <Title text1={"RELATED"} text2={"PRODUCTS"} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-4">
          {relatedProducts.map((product, index) => (
            <div key={index}>
              <ProductItem
                productId={product._id}
                productName={product.name}
                productImage={product.image[0]}
                productPrice={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;
