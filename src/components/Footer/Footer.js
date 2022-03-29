import React from "react";
import img from "../../assets/footer.jpg";
import { Data } from "../../Data/Data";
import FooterFormFunctions from "./FooterFormFunctions";
import validate from "./FooterFormValidation";

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
  const { handleChange, values, handleSubmit, errors } =
    FooterFormFunctions(validate);
  return (
    <FooterContainer id="footerContact">
      <FooterHeading>{Data.firstfooterHeading.toUpperCase()}</FooterHeading>
      <FooterHeading>{Data.secondFooterHeading.toUpperCase()}</FooterHeading>
      <FooterParagraph>{Data.footerParagraph}</FooterParagraph>
      <FooterBgImage src={img} />
      <FooterForm id="footer_form" onSubmit={handleSubmit}>
        <FooterInput
          name="firstLast"
          type="text"
          placeholder="first and last name"
          value={values.firstLast}
          onChange={handleChange}
        ></FooterInput>

        <FooterInput
          name="tel"
          type="tel"
          placeholder="telephone number"
          value={values.tel}
          onChange={handleChange}
        ></FooterInput>
        <FooterInput
          name="email"
          type="email"
          placeholder="e-mail"
          value={values.email}
          onChange={handleChange}
        ></FooterInput>
        <FooterInput
          name="description"
          type="text"
          placeholder="description"
          value={values.description}
          onChange={handleChange}
        ></FooterInput>
        <FooterInput name="checkbox" type="checkbox"></FooterInput>
      </FooterForm>
      <FooterInputButton type="submit" form="footer_form">
        Send
      </FooterInputButton>
      <FooterCopyright>CAA © 2022. All rights reserved.</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
