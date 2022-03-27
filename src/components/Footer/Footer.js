import React from "react";
import Data from "../../Data/Data";
import {
  FooterContainer,
  FooterHeading,
  FooterParagraph,
} from "./FooterElelemnts";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeading>{Data.footerHeading}</FooterHeading>
      <FooterParagraph>{Data.FooterParagraph}</FooterParagraph>
    </FooterContainer>
  );
};

export default Footer;
