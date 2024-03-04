import "./App.css";
import Approach from "./Components/Approach";
import Cards from "./Components/Cards";
import Eyes from "./Components/Eyes";
import FeaturedProjects from "./Components/FeaturedProjects";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import Navbar from "./Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

// font-['Founders_Grotesk']

function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className=" w-full  bg-zinc-900 text-white  ">
        <Navbar />
        <LandingPage />
        <div className="bg-[#CDEA68]">
          <Marquee />
          <Approach />
        </div>
      </div>
      <div className="">
        <Eyes />
        <FeaturedProjects />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
