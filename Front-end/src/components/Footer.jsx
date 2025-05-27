import { assets } from "../assets/data.js";

const Footer = () => {
  return (
    <>
      <footer className="px-4 lg:px-24 py-6 lg:py-0 mt-16">
        <div className="flex-col flex gap-6  sm:flex-row sm:flex sm:justify-between">
          <div className="flex-col sm:items-start">
            <img src={assets.logo} alt="Logo" className="w-32" />
            <p className="text-left text-sm text-gray-500 mt-4 max-w-[600px]">
              Your one-stop destination for the latest trends and timeless
              styles. Shop with confidence and enjoy exceptional quality, fast
              delivery, and outstanding customer service.
            </p>
          </div>

          <div className="flex-col sm:flex-row sm:flex sm:gap-20 lg:gap-46 xl:px-36 space-y-4">
            <div className="mt-6 sm:mt-0 space-y-4">
              <h1 className="text-left text-lg lg:text-xl font-[500] sm:text-xl">
                COMPANY
              </h1>

              <div className="mt-2 space-y-1 text-left">
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

            <div className="mt-6 sm:mt-0 space-y-4">
              <h1 className="text-left text-lg lg:text-xl font-[500] sm:text-xl">
                GET IN TOUCH
              </h1>

              <div className="mt-2 text-left space-y-1">
                <p className="text-sm text-gray-600">(+855)-12-345-678</p>
                <p className="text-sm text-gray-600">Forever@shopping.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <hr className="border-gray-300" />
      <div className="text-center lg:text-[1rem] text-sm text-gray-500 p-4 lg:p-6 mb-20 md:mb-0">
        © {new Date().getFullYear()} Forever Shopping. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
