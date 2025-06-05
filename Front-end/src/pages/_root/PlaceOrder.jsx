import Title from "../../elements/Title";
import TotalSummary from "../../components/TotalSummary";
import PaymentMethod from "../../components/PaymentMethod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      navigate("/order");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
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
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Last name"
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>
            </div>

            <div className="w-full">
              <input
                type="email"
                placeholder="Email address"
                required
                className="rounded-md border border-gray-300 p-2 w-full"
              />
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Street Address"
                required
                className="rounded-md border border-gray-300 p-2 w-full"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="State"
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="City"
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
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="Country"
                  required
                  className="rounded-md border border-gray-300 p-2 w-full"
                />
              </div>
            </div>

            <div className="w-full">
              <input
                type="tel"
                placeholder="Street Address"
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
