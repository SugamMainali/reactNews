import React, { useState } from "react";
import Sidbar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection/Index";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Sidbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} {...props} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
