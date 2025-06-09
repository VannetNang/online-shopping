import { assets } from "../assets/data";
import { useContext } from "react";
import { GlobalState } from "../context/Context";
import Title from "../elements/Title";

const PaymentMethod = () => {
  const { paymentMethod, setPaymentMethod } = useContext(GlobalState);

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-start w-full">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
        </div>

        <div className="space-y-4 md:flex gap-6 md:space-y-0">
          <div className="flex md:flex-center lg:justify-start gap-2 border border-gray-200 p-3 lg:w-55">
            <input
              type="radio"
              id="stripeMethod"
              checked={"Stripe" === paymentMethod}
              onClick={() => setPaymentMethod("Stripe")}
            />
            <label htmlFor="stripeMethod">
              <img
                src={assets.stripe_logo}
                alt="Stripe Logo"
                className="w-12 md:w-16"
              />
            </label>
          </div>

          <div className="flex md:flex-center lg:justify-start gap-2 border border-gray-200 p-4 items-center md:w-55">
            <input
              type="radio"
              id="codMethod"
              checked={"COD" === paymentMethod}
              onClick={() => setPaymentMethod("COD")}
            />
            <label htmlFor="codMethod" className="text-light-gray text-[1rem]">
              CASH ON DELIVERY
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
