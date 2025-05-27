import Title from "../../elements/Title";
import TotalSummary from "../../components/TotalSummary";
import DeliveryInformation from "../../components/DeliveryInformation";
import PaymentMethod from "../../components/PaymentMethod";

const PlaceOrder = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:flex-between px-4 lg:px-24 gap-18 md:gap-[7rem] xl:gap-[14rem] md:mt-8 mb-24">
        <div className="w-full flex-1 flex flex-col gap-4">
          <div className="flex justify-start mb-6">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>

          <DeliveryInformation />
        </div>

        <div className="flex flex-col w-full md:w-[40%]">
          <div className="w-full flex flex-col gap-3">
            <TotalSummary />
          </div>

          <div className="mt-8">
            <PaymentMethod />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
