import React from "react";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import OfferSections from "../components/OfferSections/OfferSections";
import {
  offerObjSeo,
  offerObjAds,
  offerObjBrand,
} from "../components/OfferSections/OfferData";

const Offer = () => {
  return (
    <>
      <OfferBanner />
      <OfferSections {...offerObjSeo} />
      <OfferSections {...offerObjAds} />
      <OfferSections {...offerObjBrand} />
    </>
  );
};

export default Offer;
