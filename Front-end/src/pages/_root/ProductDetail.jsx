import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../context/Context";
import AddToCart from "../../elements/AddToCart";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(GlobalState);
  const [productDetail, setProductDetail] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const product = products.filter((product) => product._id === id);
    setProductDetail(product);
    setSelectedImage(product.map((item) => item.image[0]));
  }, [id, products]);

  return (
    <>
      <div className="px-4 lg:px-24">
        {productDetail && productDetail.length ? (
          productDetail.map((product, index) => (
            <div
              key={index}
              className="flex-col-reverse md:flex md:flex-row gap-10"
            >
              {/* ============= Image Display =============== */}
              <div className="md:flex md:flex-row-reverse gap-4">
                <div className="w-full">
                  <img
                    className="w-full"
                    src={selectedImage}
                    alt="Product Image"
                  />
                </div>

                <div className="flex md:flex-col gap-3 mt-3 md:mt-0 sm:w-[22%]">
                  {product.image.map((img, index) => (
                    <img
                      className="sm:w-full w-[23%] flex-shrink-0 cursor-pointer"
                      key={index}
                      src={img}
                      alt="Product Image"
                    />
                  ))}
                </div>
              </div>

              {/* ============= Product Detail Display =============== */}
              <div className="flex-col flex gap-8 mt-10">
                <p className="font-medium text-2xl">{product.name} </p>
                <p className="font-semibold text-3xl">${product.price} </p>
                <p className="text-light-gray text-md lg:text-lg">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div className="flex flex-col gap-3">
                  <p>Select Size</p>
                  <div className="space-x-2">
                    {product.sizes.map((itemSize, index) => (
                      <button
                        key={index}
                        className="bg-slate-100 px-5 py-2 cursor-pointer active:border-black active:border"
                      >
                        {itemSize}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <AddToCart />
                </div>

                <hr className="border-slate-300 mt-6" />
                <div className="text-light-gray text-sm lg:text-lg space-y-1">
                  <p>100% Original product.</p>
                  <p>Cash on delivery is available on this product.</p>
                  <p>Easy return and exchange policy within 7 days.</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
