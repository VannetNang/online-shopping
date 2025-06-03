import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalState } from "../../context/Context";
import AddToCart from "../../elements/AddToCart";
import Relatedroduct from "../../components/RelatedProduct";
import Error from "../_error/Error";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, handleCartItem, loading } = useContext(GlobalState);
  const [productDetail, setProductDetail] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const addToCart = (id) => {
    if (!selectedSize) {
      toast.error("Please select a size!");
    } else {
      handleCartItem(id, selectedSize);
    }
  };

  useEffect(() => {
    const product = products.filter((product) => product._id === id);
    setProductDetail(product);
    setSelectedImage(product.map((item) => item.image[0]));
  }, [id, products]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  } 

  return (
    <>
      <div className="px-4 lg:px-24">
        {productDetail && productDetail.length ? (
          productDetail.map((product, index) => (
            <div key={index}>
              <div className="flex-col-reverse md:flex md:flex-row gap-10">
                {/* ============= Image Display =============== */}
                <div className="md:flex md:flex-row-reverse gap-4">
                  {/* Selected Image */}
                  <div className="w-full">
                    <img
                      className="w-full"
                      src={selectedImage}
                      alt="Product Image"
                    />
                  </div>

                  {/* Product Image Thumbnails */}
                  <div className="flex md:flex-col gap-3 mt-3 md:mt-0 sm:w-[22%]">
                    {product.image.map((img, index) => (
                      <img
                        className="sm:w-full w-[23%] flex-shrink-0 cursor-pointer"
                        key={index}
                        src={img}
                        onClick={() => setSelectedImage(img)}
                        alt="Product Image"
                      />
                    ))}
                  </div>
                </div>

                {/* ============= Product Detail Display =============== */}
                <div className="flex-col flex gap-8 mt-10">
                  <p className="font-medium text-2xl">{product.name} </p>
                  <p className="font-semibold text-3xl">${product.price} </p>
                  <p className="text-light-gray text-md">
                    {product.description}
                  </p>

                  {/* Size Selection */}
                  <div className="flex flex-col gap-3">
                    <p>Select Size</p>
                    <div className="space-x-2">
                      {product.sizes.map((itemSize, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedSize(itemSize)}
                          className={`bg-slate-100 px-5 py-2 cursor-pointer ${
                            selectedSize === itemSize && "border-black border"
                          }`}
                        >
                          {itemSize}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div onClick={() => addToCart(product._id)}>
                    <AddToCart />
                  </div>

                  <hr className="border-slate-300 mt-6" />
                  <div className="text-light-gray text-sm lg:text-md space-y-1">
                    <p>100% Original product.</p>
                    <p>Cash on delivery is available on this product.</p>
                    <p>Easy return and exchange policy within 7 days.</p>
                  </div>
                </div>
              </div>

              {/* Showing Related Products */}
              <div className="mt-20">
                <Relatedroduct subCategory={product.subCategory} />
              </div>
            </div>
          ))
        ) : (
          <>
            <Error />
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
