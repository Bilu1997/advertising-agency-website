import React from "react";
import {
  Data,
  seoOfferData,
  brandingOfferData,
  adsOfferData,
} from "../../Data/Data";

import {
  HomeOfferList,
  HomeOfferContainer,
  HomeOfferWrapper,
  HomeOfferBox,
  HomeOfferText,
  HomeOfferTitle,
  HomeOfferHeading,
  HomeOfferParagraph,
  HomeOfferTextWrapper,
  HomeOfferCards,
  HomeOfferIcon,
  BtnAskOffer,
} from "./HomeOfferElements";

import seoIcon from "../../assets/seoIcon.svg";
import adsIcon from "../../assets/adsIcon.svg";
import brandingIcon from "../../assets/brandingIcon.svg";

// Loading text from Data.js
const seoOffer = seoOfferData.map((d, i) => (
  <HomeOfferText key={i + "keySEO"}>{d.text}</HomeOfferText>
));

const adsOffer = adsOfferData.map((d, i) => (
  <HomeOfferText key={i + "keyADS"}>{d.text}</HomeOfferText>
));

const brandingOffer = brandingOfferData.map((d, i) => (
  <HomeOfferText key={i + "keyBRA"}>{d.text}</HomeOfferText>
));

const HomeOffer = () => {
  return (
    <HomeOfferContainer id="homeOffer">
      <HomeOfferTextWrapper>
        <HomeOfferHeading>{Data.homeOfferTitle}</HomeOfferHeading>
        <HomeOfferParagraph>{Data.homeOfferParagraph}</HomeOfferParagraph>
      </HomeOfferTextWrapper>
      <HomeOfferWrapper>
        <HomeOfferCards>
          <HomeOfferBox>
            <HomeOfferIcon src={seoIcon} />
            <HomeOfferTitle>SEO Optymalization</HomeOfferTitle>
            <HomeOfferList>{seoOffer}</HomeOfferList>
            <BtnAskOffer
              to="footerContact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Ask for an offer
            </BtnAskOffer>
          </HomeOfferBox>
          <HomeOfferBox>
            <HomeOfferIcon src={adsIcon} />
            <HomeOfferTitle>Google ads</HomeOfferTitle>
            <HomeOfferList>{adsOffer}</HomeOfferList>
            <BtnAskOffer
              to="footerContact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Ask for an offer
            </BtnAskOffer>
          </HomeOfferBox>
          <HomeOfferBox>
            <HomeOfferIcon src={brandingIcon} />
            <HomeOfferTitle>Branding</HomeOfferTitle>
            <HomeOfferList>{brandingOffer}</HomeOfferList>
            <BtnAskOffer
              to="footerContact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Ask for an offer
            </BtnAskOffer>
          </HomeOfferBox>
        </HomeOfferCards>
      </HomeOfferWrapper>
    </HomeOfferContainer>
  );
};

export default HomeOffer;
