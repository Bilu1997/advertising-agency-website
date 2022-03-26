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
} from "./HomeOfferElements";

import seoIcon from "../../assets/seoIcon.svg";
import adsIcon from "../../assets/adsIcon.svg";
import brandingIcon from "../../assets/brandingIcon.svg";

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
    <HomeOfferContainer>
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
          </HomeOfferBox>
          <HomeOfferBox>
            <HomeOfferIcon src={adsIcon} />
            <HomeOfferTitle>Google ads</HomeOfferTitle>
            <HomeOfferList>{adsOffer}</HomeOfferList>
          </HomeOfferBox>
          <HomeOfferBox>
            <HomeOfferIcon src={brandingIcon} />
            <HomeOfferTitle>Branding</HomeOfferTitle>
            <HomeOfferList>{brandingOffer}</HomeOfferList>
          </HomeOfferBox>
        </HomeOfferCards>
      </HomeOfferWrapper>
    </HomeOfferContainer>
  );
};

export default HomeOffer;
