import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../HeroSection/Button";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
  ArrowForward,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>

        <HeroH1>Custom Herbs Tailored To Your Needs</HeroH1>
        <HeroP>See What Herbs Can Do For Your Well-Being!</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Craft Your Custom Elixir {hover ? <ArrowForward /> : <ArrowRight />}

          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
