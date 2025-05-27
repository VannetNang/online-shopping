import { assets } from "../assets/data";
import Title from "../elements/Title";

const PaymentMethod = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-start w-full">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
        </div>

        <div className="space-y-4 xl:space-y-0 xl:grid xl:grid-cols-3 xl:gap-3">
          <div className="flex gap-6 border border-gray-200 p-3">
            <input type="radio" name="paymentMethod" value="stripe" />
            <img src={assets.stripe_logo} alt="Stripe Logo" className="w-12" />
          </div>

          <div className="flex gap-6 border border-gray-200 p-3">
            <input type="radio" name="paymentMethod" value="razorpay" />
            <img
              src={assets.razorpay_logo}
              alt="Razor Pay Logo"
              className="w-25"
            />
          </div>

          <div className="flex gap-6 border border-gray-200 p-3 items-center">
            <input type="radio" name="paymentMethod" value="cod" />
            <label
              htmlFor="paymentMethod"
              className="text-light-gray text-[1rem] lg:text-sm"
            >
              CASH ON DELIVERY
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="button">PLACE AN ORDER</button>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
