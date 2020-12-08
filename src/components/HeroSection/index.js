import React, { useState } from "react";
import {
  ArrowRight,
  ArrowForward,
  HerpBtnWrapper,
  HeroP,
  HeroH1,
  HeroContent,
  VideoBg,
  HeroBg,
  HeroContainer,
} from "./HeroSectionElement";
import Video from "../../assets/videos/video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="Home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Reading News Made Easy</HeroH1>
        <HeroP>Sign up for a new account today and</HeroP>
        <HerpBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primaty="true"
            dark="true"
            spy={true}
            exact="true"
            smooth={true}
            offset={-80}
            duration={500}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HerpBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
