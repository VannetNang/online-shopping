import { assets } from "../assets/data.js";
import PolicyElement from "../elements/PolicyElement";

const ShopPolicy = () => {
  const policyData = [
    {
      img: assets.exchange_icon,
      header: "Easy Exchange Policy",
      description: "We offer hassle free exchange policy",
    },
    {
      img: assets.quality_icon,
      header: "7 Days Return Policy",
      description: "We provide 7 days free return policy",
    },
    {
      img: assets.support_img,
      header: "Best Customer Support",
      description: "We provide 24/7 customer support",
    },
  ];

  return (
    <>
      <div className="md:flex-around mt-22">
        {policyData.map((data, index) => (
          <div key={index} className="mb-14">
            <PolicyElement
              policyImage={data.img}
              policyHeader={data.header}
              policyDescription={data.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopPolicy;
