import { Outlet } from "react-router-dom";
import Login from "./pages/_auth/Login";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { GlobalState } from "./context/Context";

const App = () => {
  const { token } = useContext(GlobalState);

  return (
    <>
      <ToastContainer position="top-left" />

      {token ? (
        <section>
          <Outlet />
        </section>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
