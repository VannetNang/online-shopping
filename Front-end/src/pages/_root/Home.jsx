import BestSeller from "../../components/BestSeller";
import Hero from "../../components/Hero";
import LatestCollection from "../../components/LatestCollection";

const Home = () => {
  return (
    <>
      <div>
        <Hero />

        <LatestCollection />

        <BestSeller />
      </div>
    </>
  );
};

export default Home;
