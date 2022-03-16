import { useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import Category from "../components/Category";
import Footer from "../components/Footer";
import { homeObjOne, homeObjTwo, homeObjThree } from "../components/MainSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <MainSection {...homeObjOne}/>
      <MainSection {...homeObjTwo}/>
      <Category />
      <MainSection {...homeObjThree}/>
      <Footer />
    </>
  );
};

export default Home;
