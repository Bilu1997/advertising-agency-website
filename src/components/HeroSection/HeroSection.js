import React from "react";
import HeroImage from "../../assets/HeroImg.svg";
import { Data } from "../../Data/Data.js";
import {
  HeroContainer,
  HeroImg,
  HeroWrapper,
  HeroTitle,
  HeroParagraph,
  OfferBtn,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroImg src={HeroImage}></HeroImg>
        <HeroWrapper>
          <HeroTitle>{Data.heroTitle}</HeroTitle>
          <HeroParagraph>{Data.heroParagraph}</HeroParagraph>
          <OfferBtn>Offer</OfferBtn>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
