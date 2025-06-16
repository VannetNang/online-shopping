import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../context/Context";
import Title from "../../elements/Title";
import axios from "axios";
import VITE_BACKEND_ENDPOINT from "../../config/env";

const Order = () => {
  const { products, token } = useContext(GlobalState);
  const [orderItems, setOrderItems] = useState([]);

  const getOrderItems = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.get(
        `${VITE_BACKEND_ENDPOINT}/place-order/user`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data = await response.data;

      if (data.success) {
        const orderData = [];

        data.data.map((data) =>
          data.items.map((item) => {
            item["paymentMethod"] = data.paymentMethod;
            item["status"] = data.status;
            item["date"] = data.updatedAt;
            orderData.push(item);
          })
        );

        setOrderItems(orderData);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getOrderItems();
  }, []);

  return (
    <>
      <div className="px-4 lg:px-24 lg:mt-8">
        <div className="flex justify-start mb-6">
          <Title text1={"MY"} text2={"ORDERS"} />
        </div>

        <div>
          {orderItems.map((orderItem, index) => {
            const productData = products.find(
              (product) => product._id === orderItem.productId
            );
            return (
              <div
                key={index}
                className="grid grid-rows-2 md:flex-between border-y-1 border-gray-300"
              >
                <div className="flex items-start lg:gap-4 mt-4 md:mt-0 md:py-4">
                  {/* Cart Image */}
                  <div className="w-[90px]">
                    <img
                      src={productData.image[0]}
                      alt="Product Image"
                      className="w-[85%] lg:w-full"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    {/* Cart Item Details */}
                    <p className="text-sm md:text-[1rem]">{productData.name}</p>

                    <div className="flex items-center gap-6 text-sm md:text-[1rem]">
                      <p>${productData.price}</p>
                      <p>Quantity: {orderItem.quantity}</p>
                      <p>Size: {orderItem.size}</p>
                    </div>

                    {/* Date Order */}
                    <div className="flex gap-2 text-sm md:text-[1rem]">
                      <p>Date:</p>
                      <p className="text-light-gray">
                        {new Date(orderItem.date).toDateString()}
                      </p>
                    </div>

                    {/* Payment Method */}
                    <div className="flex gap-2 text-sm md:text-[1rem]">
                      <p>Payment:</p>
                      <p className="text-light-gray">
                        {orderItem.paymentMethod}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-between md:w-[40%]">
                  <div className="flex items-center gap-2 text-sm md:text-[1rem]">
                    <p className="bg-green-400 rounded-full w-2 h-2"></p>
                    <p>{orderItem.status}</p>
                  </div>

                  <div onClick={getOrderItems}>
                    <button className="bg-slate-50 py-2 px-4 rounded-lg cursor-pointer text-sm md:text-[1rem]">
                      Track Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Order;
