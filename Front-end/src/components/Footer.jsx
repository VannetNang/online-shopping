import { assets } from "../assets/data.js";

const Footer = () => {
  return (
    <>
      <footer className="px-24 py-6">
        <div className="flex-col-center gap-8 md:flex-row md:flex-between">
          <div className="flex-col-center md:items-start">
            <img src={assets.logo} alt="Logo" className="w-28" />
            <p className="text-center md:text-left text-sm text-gray-500 mt-4 max-w-[600px]">
              Your one-stop destination for the latest trends and timeless
              styles. Shop with confidence and enjoy exceptional quality, fast
              delivery, and outstanding customer service.
            </p>
          </div>

          <div className="flex-col md:flex-row md:flex md:gap-20 lg:gap-46 xl:px-36">
            <div className="mt-6">
              <h1 className="text-center text-lg lg:text-2xl font-[500] md:text-xl">
                COMPANY
              </h1>

              <div className="mt-2 space-y-1 text-center md:text-left">
                <p className="text-sm cursor-pointer text-gray-600 hover:text-black">
                  Home
                </p>
                <p className="text-sm cursor-pointer text-gray-600 hover:text-black">
                  About us
                </p>
                <p className="text-sm cursor-pointer text-gray-600 hover:text-black">
                  Delivery
                </p>
                <p className="text-sm cursor-pointer text-gray-600 hover:text-black">
                  Privacy policy
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h1 className="text-center text-lg lg:text-2xl font-[500] md:text-xl">
                GET IN TOUCH
              </h1>

              <div className="mt-2 text-center md:text-left space-y-1">
                <p className="text-sm text-gray-600">(+855)-12-345-678</p>
                <p className="text-sm text-gray-600">Forever@shopping.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <hr className="border-gray-300" />
      <div className="text-center lg:text-lg text-sm text-gray-500 p-4 lg:p-6 mb-20 md:mb-0">
        © {new Date().getFullYear()} Forever Shopping. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
