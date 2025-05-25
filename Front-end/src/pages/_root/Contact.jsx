import Title from "../../elements/Title";
import { assets } from "../../assets/data.js";

const Contact = () => {
  return (
    <>
      <div className="px-4">
        <div className="mb-12">
          <Title text1={"CONTACT"} text2={"US"} />
        </div>

        <div className="md:flex-center md:gap-12 md:mb-16">
          <img
            src={assets.contact_img}
            alt="Contact Us Image"
            className="md:w-1/2 md:max-w-[480px]"
          />

          <div className="space-y-6 mb-20">
            <h1 className="text-xl font-semibold mt-8 lg:text-2xl">
              Our Store
            </h1>

            <div className="text-gray-500 text-md lg:text-lg space-y-1">
              <p>Location 1: Kampuchea Krom, Cambodia</p>
              <p>Location 2: Aeon 2 Mall City, Cambodia</p>
            </div>

            <div className="text-gray-500 text-md lg:text-lg">
              <p>Tel: (+855)-12-345-678</p>
              <p>Email: Forever@shopping.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
