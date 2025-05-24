import { assets } from "../assets/data.js";

const Hero = () => {
  return (
    <>
      <div className="mx-4 lg:mx-24 mt-8">
        <div className="flex-col md:flex-row md:flex-between w-full border border-slate-400">
          {/* Left-side Component */}

          <div className="flex-col-center gap-6 w-full p-10 md:p-0">
            <div className="flex-center gap-2 text-sm md:text-xl">
              <p className="md:w-11 w-7 h-[2px] bg-black"></p>
              <p>OUR BESTSELLERS</p>
            </div>

            <p className="prata-regular text-2xl md:text-4xl">Lastest Arrivals</p>

            <div className="flex-center gap-2 text-sm md:text-xl">
              <p>SHOP NOW</p>
              <p className="md:w-11 w-7 h-[2px] bg-black"></p>
            </div>
          </div>

          {/* right-side Component */}
          <img
            src={assets.hero_img}
            alt="Hero Image"
            className="md:w-1/2 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
