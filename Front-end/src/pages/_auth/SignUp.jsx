import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate("");
  const onSumbitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="px-8 mt-10 mb-32">
        {/* Sign Up Title */}
        <div className="flex-center text-2xl lg:text-3xl gap-2 lg:gap-4 mb-6">
          <h1 className="text-center prata-regular">Sign Up</h1>
          <p className="w-7 lg:w-11 h-[2px] bg-black"></p>
        </div>

        <form className="sm:flex-col-center" onSubmit={onSumbitHandler}>
          <div className="space-y-4 sm:min-w-[400px]">
            <div className="w-full">
              <input
                type="text"
                placeholder="Name"
                required
                className="rounded-sm border border-gray-400 p-2 w-full"
              />
            </div>

            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                required
                className="rounded-sm border border-gray-400 p-2 w-full"
              />
            </div>

            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                required
                className="rounded-sm border border-gray-400 p-2 w-full"
              />
            </div>

            <div className="w-full flex-between text-sm">
              <p className="cursor-pointer">Forgot your password?</p>
              <p
                className="cursor-pointer"
                onClick={() => navigate("/sign-in")}
              >
                Login here
              </p>
            </div>

            <div className="flex-center">
              <button
                type="submit"
                className="bg-black text-white rounded-sm px-5 text-[16px] lg:px-7 py-2 cursor-pointer hover:opacity-85 transition-all active:bg-white active:text-black"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
