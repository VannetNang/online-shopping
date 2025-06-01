import { Outlet } from "react-router-dom";
import Login from "./pages/_auth/Login";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { GlobalState } from "./context/Context";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const { token } = useContext(GlobalState);

  return (
    <>
      <ToastContainer position="top-left" />

      {token ? (
        <>
          <Navbar />

          <div className="flex">
            <div className="w-80">
              <Sidebar />
            </div>

            <section className="flex-1">
              <Outlet />
            </section>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
