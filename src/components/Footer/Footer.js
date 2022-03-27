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
        <FooterInput placeholder="first and last name"></FooterInput>
        <FooterInput placeholder="telephone number"></FooterInput>
        <FooterInput placeholder="e-mail"></FooterInput>
        <FooterInput placeholder="description"></FooterInput>
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
