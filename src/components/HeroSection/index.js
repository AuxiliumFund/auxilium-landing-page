import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroButtonWrapper,
} from "./HeroElements";



const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} stype="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>We help you stay afloat.</HeroH1>
        {/* <HeroH2>While you work your way back up.</HeroH2> */}
        <HeroP>The Auxilium Fund was founded as a decentralized CaaS crypto protocol that enables NFT compensation for rug pull victims across all chains. We help those who lost their hard-earned funds and reward investors with sustainable returns for a unique DeFi experience.</HeroP>
        {/* <HeroButtonWrapper>
          <Button to="learnmore" onMouseHover={onHover} onMouseLeave={onHover}
          primary='true'
          dark='true'
          >
            Learn More 
          </Button>
        </HeroButtonWrapper> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
