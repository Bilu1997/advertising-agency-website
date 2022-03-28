import React from "react";
import img from "../../assets/footer.jpg";
import { Data } from "../../Data/Data";
import {
  FooterBgImage,
  FooterContainer,
  FooterForm,
  FooterHeading,
  FooterParagraph,
  FooterInput,
  FooterInputButton,
  FooterCopyright,
} from "./FooterElelements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeading>{Data.firstfooterHeading.toUpperCase()}</FooterHeading>
      <FooterHeading>{Data.secondFooterHeading.toUpperCase()}</FooterHeading>
      <FooterParagraph>{Data.footerParagraph}</FooterParagraph>
      <FooterBgImage src={img} />
      <FooterForm id="footer_form">
        <FooterInput
          type="text"
          placeholder="first and last name"
        ></FooterInput>
        <FooterInput type="tel" placeholder="telephone number"></FooterInput>
        <FooterInput type="email" placeholder="e-mail"></FooterInput>
        <FooterInput type="text" placeholder="description"></FooterInput>
        <FooterInput type="checkbox"></FooterInput>
      </FooterForm>
      <FooterInputButton type="submit" form="footer_form">
        Send
      </FooterInputButton>
      <FooterCopyright>CAA © 2022. All rights reserved.</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
