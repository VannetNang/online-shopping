import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import VITE_BACKEND_ENDPOINT from "../../config/env";
import { GlobalState } from "../../context/Context";
import { assets } from "../../assets/data";

const SignIn = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(GlobalState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSumbitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        `${VITE_BACKEND_ENDPOINT}/auth/sign-in`,
        { email, password }
      );

      const data = await response.data;

      console.log(response);
      if (data.success) {
        navigate("/");
        setToken(data.data.token);
        localStorage.setItem("token", data.data.token);
        toast.success(data.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Error: Invalid Credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="px-8 mt-10 mb-32">
        {/* Sign In Title */}
        <div className="flex-center text-2xl lg:text-3xl gap-2 lg:gap-4 mb-6">
          <h1 className="text-center prata-regular">Sign In</h1>
          <p className="w-7 lg:w-11 h-[2px] bg-black"></p>
        </div>

        <form className="sm:flex-col-center" onSubmit={onSumbitHandler}>
          <div className="space-y-4 sm:min-w-[400px]">
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-sm border border-gray-400 p-2 w-full"
              />
            </div>

            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-sm border border-gray-400 p-2 w-full"
              />
            </div>

            <div className="w-full flex-between text-sm">
              <p className="cursor-pointer">Forgot your password?</p>
              <p
                className="cursor-pointer"
                onClick={() => navigate("/sign-up")}
              >
                Create account
              </p>
            </div>

            <div className="flex-center">
              <button
                type="submit"
                className="flex gap-2 bg-black text-white rounded-sm px-5 text-[16px] lg:px-7 py-2 cursor-pointer hover:opacity-85 transition-all active:bg-white active:text-black"
              >
                Sign In
                {loading && (
                  <img
                    src={assets.loading_icon}
                    alt="..."
                    width={18}
                    height={18}
                  />
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
