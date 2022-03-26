import React from "react";
import {
  HomeOfferList,
  HomeOfferContainer,
  HomeOfferWrapper,
} from "./HomeOfferElements";

const HomeOffer = () => {
  return (
    <HomeOfferContainer>
      <HomeOfferWrapper>
        <HomeOfferList></HomeOfferList>
        <HomeOfferList></HomeOfferList>
        <HomeOfferList></HomeOfferList>
      </HomeOfferWrapper>
    </HomeOfferContainer>
  );
};

export default HomeOffer;
