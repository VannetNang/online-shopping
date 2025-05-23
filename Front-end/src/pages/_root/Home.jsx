import { useContext } from "react";
import { GlobalState } from "../../context/Context";

const Home = () => {
  const { test } = useContext(GlobalState);
  return <div className="text-center">{test}</div>;
};

export default Home;
