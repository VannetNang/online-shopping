import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Title from "../../components/Title";
import BACKEND_URL_ENDPOINT from "../../config/env";
import { toast } from "react-toastify";
import { GlobalState } from "../../context/Context";

const Login = () => {
  const { setToken } = useContext(GlobalState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URL_ENDPOINT}/auth/admin/sign-in`,
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        const token = response.data.data.token;
        setToken(token);
        localStorage.setItem("token", token);
        return toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error.message);
      return toast.error("Invalid credentials!");
    }
  };

  return (
    <>
      <div className="flex-center min-h-screen">
        <form
          className="w-90 max-w-90 space-y-4 shadow-xl p-4"
          onSubmit={onSubmitHandler}
        >
          <div>
            <Title text1={"ADMIN"} text2={"LOGIN"} />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-sm border border-gray-400 p-2 w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-sm border border-gray-400 p-2 w-full"
            />
          </div>

          <button type="submit" className="w-full button">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
