import Title from "../../elements/Title";
import { assets } from "../../assets/data.js";

const Contact = () => {
  return (
    <>
      <div className="px-4 xl:px-60 mb-26">
        <div className="mb-12">
          <Title text1={"CONTACT"} text2={"US"} />
        </div>

        <div className="md:flex md:items-start md:justify-around md:mb-16">
          <img
            src={assets.contact_img}
            alt="Contact Us Image"
            className="md:w-1/2 md:max-w-[480px]"
          />

          <div className="space-y-6 mb-20 mt-8 md:mt-0">
            <h1 className="text-xl font-semibold lg:text-2xl">
              Our Store
            </h1>

            <div className="text-gray-500 text-md lg:text-[1rem] space-y-1">
              <p>Location 1: Kampuchea Krom, Cambodia</p>
              <p>Location 2: Aeon 2 Mall Sensok, Cambodia</p>
            </div>

            <div className="text-gray-500 text-md lg:text-[1rem]">
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
