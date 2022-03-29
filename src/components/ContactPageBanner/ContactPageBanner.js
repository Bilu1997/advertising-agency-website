import React from "react";
import {
  ContactPageBannerHeader,
  ContactPageBannerContainer,
  ContactPageBannerImg,
} from "./ContactPageBannerElelemts";
import bgImg from "../../assets/contactPageImg.png";

const ContactPageBanner = () => {
  return (
    <>
      <ContactPageBannerContainer>
        <ContactPageBannerImg src={bgImg} />
        <ContactPageBannerHeader>
          Our specialist are always open to help.{" "}
        </ContactPageBannerHeader>
      </ContactPageBannerContainer>
    </>
  );
};

export default ContactPageBanner;
