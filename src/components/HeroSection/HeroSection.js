import React from "react";
import HeroImage from "../../assets/HeroImg.svg";
import { Data } from "../../Data/Data.js";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroImg,
  HeroWrapper,
  HeroTitle,
  HeroParagraph,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroImg src={HeroImage}></HeroImg>
        <HeroWrapper>
          <HeroTitle>{Data.heroTitle}</HeroTitle>
          <HeroParagraph>{Data.heroParagraph}</HeroParagraph>
          <Button to="homeOffer" spy={true} smooth={true} duration={500}>
            Offer
          </Button>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
