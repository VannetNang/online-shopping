import Title from "../../elements/Title";
import Mission from "../../elements/Mission";
import { assets } from "../../assets/data.js";

const About = () => {
  return (
    <>
      <div className="px-4 md:px-12 lg:px-24 mb-24">
        <Title text1={"ABOUT"} text2={"US"} />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mt-12">
          {/* Image Section */}
          <div className="flex justify-center lg:w-1/2">
            <img
              src={assets.about_img}
              alt="About Us Image"
              className="w-full max-w-[500px] rounded-lg shadow-lg"
            />
          </div>

          {/* Mission Section */}
          <div className="lg:w-1/2">
            <Mission />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
