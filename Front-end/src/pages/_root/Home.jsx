import BestSeller from "../../components/BestSeller";
import Hero from "../../components/Hero";
import LatestCollection from "../../components/LatestCollection";
import ShopPolicy from "../../components/ShopPolicy";

const Home = () => {
  return (
    <>
      <div>
        <Hero />

        <LatestCollection />

        <BestSeller />

        <ShopPolicy />
      </div>
    </>
  );
};

export default Home;
