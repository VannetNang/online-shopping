import { useNavigate } from "react-router-dom";
import NotFoundIcon from "../../components/NotFoundIcon";

const NotFound = () => {
  const navigate = useNavigate("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100 flex flex-col items-center justify-center p-6 font-inter">
      <div className="bg-slate-800 shadow-2xl rounded-xl p-8 md:p-16 text-center max-w-lg w-full transform transition-all hover:scale-105 duration-300">
        <NotFoundIcon />
        <h1 className="text-5xl md:text-7xl font-bold text-indigo-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Oops! Page Not Found.
        </h2>
        <p className="text-md md:text-lg text-gray-400 mb-10">
          It seems like the page you were looking for doesn't exist or has been
          moved. Don't worry, let's get you back on track!
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
