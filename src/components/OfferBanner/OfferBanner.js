import React from "react";
import banner from "../../assets/offerBanner.png";
import {
  OfferBannerContainer,
  OfferBannerHeading,
  OfferBannerImg,
  OfferBannerParagraph,
  OfferBannerTextWrapper,
} from "./OfferBannerElements";

const OfferBanner = () => {
  return (
    <>
      <OfferBannerContainer>
        <OfferBannerImg src={banner} />
        <OfferBannerTextWrapper>
          <OfferBannerHeading>CAA</OfferBannerHeading>
          <OfferBannerHeading>Creative Advertising Agency</OfferBannerHeading>
          <OfferBannerHeading>Our offer</OfferBannerHeading>
        </OfferBannerTextWrapper>
      </OfferBannerContainer>
    </>
  );
};

export default OfferBanner;
