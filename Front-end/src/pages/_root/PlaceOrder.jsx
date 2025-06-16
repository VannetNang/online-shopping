import Title from "../../elements/Title";
import TotalSummary from "../../components/TotalSummary";
import PaymentMethod from "../../components/PaymentMethod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalState } from "../../context/Context";
import axios from "axios";
import VITE_BACKEND_ENDPOINT from "../../config/env";

const PlaceOrder = () => {
  const navigate = useNavigate("");
  const {
    cartItems,
    setCartItems,
    paymentMethod,
    token,
    total,
    setQuantity,
    products,
  } = useContext(GlobalState);
  const [addressData, setAddressData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    state: "",
    city: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // Adding product name to the cart when placing order
      cartItems.map((item) => {
        const product = products.find(
          (product) => product._id === item.productId
        );
        item.name = product.name;
      });

      if (paymentMethod === "COD") {
        const response = await axios.post(
          `${VITE_BACKEND_ENDPOINT}/place-order/cod`,
          { items: cartItems, address: addressData, amount: total },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const data = await response.data;

        if (!data.success) {
          toast.error(error.message);
        }

        toast.success("Order placed successfully!");
        setQuantity(0);
        setCartItems([]);
        navigate("/order");
      } else if (paymentMethod === "Stripe") {
        console.log("Stripe");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  const handleAddressInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddressData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col md:flex-row md:flex-between px-4 lg:px-24 gap-18 md:gap-[7rem] xl:gap-[14rem] md:mt-8 mb-24"
      >
        <div className="w-full flex-1 flex flex-col gap-4">
          <div className="flex justify-start mb-6">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>

          {/* Delivery Information */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  onChange={handleAddressInfo}
                  value={addressData.firstName}
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  onChange={handleAddressInfo}
                  value={addressData.lastName}
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>
            </div>

            <div className="w-full">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                onChange={handleAddressInfo}
                value={addressData.email}
                required
                className="rounded-md border border-gray-300 p-2 w-full"
              />
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Street Address"
                name="street"
                onChange={handleAddressInfo}
                value={addressData.street}
                required
                className="rounded-md border border-gray-300 p-2 w-full"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  onChange={handleAddressInfo}
                  value={addressData.state}
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={handleAddressInfo}
                  value={addressData.city}
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Zipcode"
                  name="zipcode"
                  onChange={handleAddressInfo}
                  value={addressData.zipcode}
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  onChange={handleAddressInfo}
                  value={addressData.country}
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>
            </div>

            <div className="w-full">
              <input
                type="tel"
                placeholder="Street Address"
                name="phone"
                onChange={handleAddressInfo}
                value={addressData.phone}
                required
                className="rounded-md border border-gray-300 p-2 w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[40%]">
          <div className="w-full flex flex-col gap-3">
            <TotalSummary />
          </div>

          <div className="mt-8">
            <PaymentMethod />
          </div>

          <div className="flex justify-end mt-6">
            <button type="submit" className="button">
              PLACE AN ORDER
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PlaceOrder;
