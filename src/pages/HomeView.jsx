import Hero from "../components/Hero";
import Fiture from "../components/Fiture";
import Reward from "../components/Reward";
import MarketplacePartner from "../components/MarketplacePartner";

const HomeView = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Hero />
      <Fiture />
      <Reward />
      <MarketplacePartner />
    </div>
  );
};

export default HomeView;
