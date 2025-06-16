import axios from "axios";
import { useContext, useEffect, useState } from "react";
import VITE_BACKEND_ENDPOINT from "../../config/env";
import { GlobalState } from "../../context/Context";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const ViewOrdered = () => {
  const { token } = useContext(GlobalState);
  const [orderData, setOrderData] = useState([]);

  const getOrderData = async () => {
    try {
      const response = await axios.get(`${VITE_BACKEND_ENDPOINT}/place-order`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.data;

      if (data.success) {
        setOrderData(data.data);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  console.log(orderData);

  return (
    <>
      <div className="px-8 lg:px-22 py-10">
        <div className="mb-4">All Orders List</div>

        <div className="space-y-4">
          {orderData && orderData.length
            ? orderData.map((data) => (
                <div
                  key={data._id}
                  className="p-6 grid grid-cols-[1fr_3fr_1fr] gap-2 md:grid-cols-[1fr_2fr_1fr_1fr_1fr] w-full border border-slate-300 text-light-gray text-sm"
                >
                  {/* Product Image */}
                  <div>
                    <img src={assets.parcel_icon} alt="Parcel Icon" />
                  </div>

                  {/* Product Info */}
                  <div>
                    {/* Product name */}
                    <div>
                      {data.items.map((item) => (
                        <p>
                          {item.name} x {item.quantity} {item.size}
                        </p>
                      ))}
                    </div>

                    {/* Product address */}
                    <p>
                      {data.address.firstName} {data.address.lastName}
                    </p>
                    <p>{data.address.street}</p>
                    <p>
                      {data.address.state}, {data.address.city},
                      {data.address.country}, {data.address.zipcode}
                    </p>
                    <p>{data.address.phone}</p>
                  </div>

                  {/* Product Payment */}
                  <div>
                    <p> Items: {data.items.length} </p>
                    <p> Method: {data.paymentMethod} </p>
                    <p> Payment: {data.isPayment ? "Completed" : "Pending"} </p>
                    <p> Date: {new Date(data.updatedAt).toDateString()} </p>
                  </div>

                  {/* Product Cost */}
                  <p className="mt-3 md:mt-0"> ${data.amount} </p>

                  {/* Product Status */}
                  <div className="mt-3 md:mt-0">
                    <select>
                      <option value="Order Placed">Order Placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for delivery">Out for delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default ViewOrdered;
