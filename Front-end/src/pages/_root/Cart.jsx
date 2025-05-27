import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../context/Context";
import Title from "../../elements/Title";
import { assets } from "../../assets/data";

const Cart = () => {
  const { cartItems } = useContext(GlobalState);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    try {
      if (cartItems && cartItems.length) {
        setCartData(cartItems);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cartItems]);

  return (
    <>
      <div className="px-4 lg:px-24">
        <div className="flex justify-start mb-6">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>

        <div>
          {cartData.map((cartItem, index) => (
            <div
              key={index}
              className="flex-between border-y-1 border-gray-300"
            >
              <div className="flex items-start lg:gap-4 py-4">
                {/* Cart Image */}
                <div className="w-[90px]">
                  <img
                    src={cartItem.image}
                    alt="Product Image"
                    className="w-[70%] lg:w-full"
                  />
                </div>

                {/* Cart Item Details */}
                <div className="flex flex-col space-y-3">
                  <p className="text-xs md:text-lg">{cartItem.name}</p>

                  <div className="flex items-center gap-6">
                    <p className="text-sm md:text-[1rem]">${cartItem.price}</p>
                    <button className="bg-slate-100 px-3">
                      {cartItem.size}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 sm:flex-between sm:w-[40%]">
                <div>
                  <input
                    type="number"
                    value={cartItem.quantity}
                    className="border-1 border-slate-200 px-2 w-14"
                  />
                </div>

                <div className="cursor-pointer">
                  <img
                    src={assets.bin_icon}
                    alt="Delete Icon"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
