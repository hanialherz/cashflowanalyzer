import HeroSection from "@/features/Home/HeroSection";
import FeaturesSection from "@/features/Home/FeaturesSection";
import AboutMeSection from "@/features/Home/AboutMeSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />

      <FeaturesSection />

      <AboutMeSection />
    </div>
  );
};
export default Home;
