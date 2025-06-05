import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../context/Context";
import Title from "../../elements/Title";
import { assets } from "../../assets/data";
import TotalSummary from "../../components/TotalSummary";
import { toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate("");
  const { cartItems, updateCartItemQuantity, deleteItem, products, loading } =
    useContext(GlobalState);
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      if (cartItems && cartItems.length > 0) {
        setCartData(cartItems);
      }
      // Only set loading to false when both products and cart items are loaded
      if (!loading && products.length > 0) {
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      setIsLoading(false);
    }
  }, [cartItems, products, loading]);

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p>Loading your cart...</p>
      </div>
    );
  }

  if (!cartData.length) {
    return (
      <div className="px-4 lg:px-24">
        <div className="flex justify-start mb-6">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div className="min-h-[400px] flex items-center justify-center">
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 lg:px-24">
        <div className="flex justify-start mb-6">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>

        <div>
          {cartData.map((cartItem, index) => {
            const productData = products.find(
              (product) => product._id === cartItem.productId
            );

            // Skip rendering if product data is not found
            if (!productData) {
              console.log("Product not found:", cartItem.productId);
              return null;
            }

            return (
              <div
                key={index}
                className="flex-between border-y-1 border-gray-300"
              >
                <div className="flex items-start lg:gap-4 py-4">
                  {/* Cart Image */}
                  <div className="w-[90px]">
                    <img
                      src={productData.image[0]}
                      alt={productData.name}
                      className="w-[70%] lg:w-full"
                    />
                  </div>

                  {/* Cart Item Details */}
                  <div className="flex flex-col space-y-3">
                    <p className="text-xs md:text-lg">{productData.name}</p>

                    <div className="flex items-center gap-6">
                      <p className="text-sm md:text-[1rem]">
                        ${productData.price}
                      </p>
                      <button className="bg-slate-100 px-3">
                        {cartItem.size}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-5 sm:flex-between sm:w-[40%]">
                  <div>
                    <input
                      type="number"
                      min={1}
                      value={cartItem.quantity}
                      onChange={(e) =>
                        updateCartItemQuantity(
                          cartItem._id,
                          cartItem.size,
                          e.target.value
                        )
                      }
                      className="border-1 border-slate-200 px-2 py-1 w-14 sm:w-18"
                    />
                  </div>

                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      deleteItem(cartItem.productId, cartItem.size);
                      // Update local cart data
                      setCartData((prev) =>
                        prev.filter(
                          (item) =>
                            !(
                              item.productId === cartItem.productId &&
                              item.size === cartItem.size
                            )
                        )
                      );
                    }}
                  >
                    <img
                      src={assets.bin_icon}
                      alt="Delete Icon"
                      className="w-5"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex sm:justify-end my-22">
          <div className="w-full sm:w-[65%] lg:w-[45%] xl:w-[30%] flex flex-col gap-3">
            <TotalSummary />
            <div
              className="flex justify-end mt-4"
              onClick={() => navigate("/place-order")}
            >
              <button className="button">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
