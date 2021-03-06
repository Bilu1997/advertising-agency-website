import React, { useState } from "react";
import { Data } from "../../Data/Data";
import FooterFormFunctions from "./FooterFormFunctions";
import validate from "./FooterFormValidation";
import footerBgImg from "../../assets/footer.jpg";

import {
  FooterBgImage,
  FooterContainer,
  FooterForm,
  FooterHeading,
  FooterParagraph,
  FooterInput,
  FooterInputButton,
  FooterCopyright,
  FooterThanks,
} from "./FooterElelements";

const Footer = () => {
  const { handleChange, values, handleSubmit, errors, isSubmitting } =
    FooterFormFunctions(validate, submitForm);

  const [fillCheckbox, setFillCheckbox] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <FooterContainer id="footerContact">
      <FooterHeading>{Data.firstfooterHeading.toUpperCase()}</FooterHeading>
      <FooterHeading>{Data.secondFooterHeading.toUpperCase()}</FooterHeading>
      <FooterParagraph>{Data.footerParagraph}</FooterParagraph>
      <FooterBgImage src={footerBgImg} />
      {isSubmitted ? (
        <FooterThanks>Thank you. We will respond you in 24h.</FooterThanks>
      ) : (
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
          <FooterInput
            name="checkbox"
            type="checkbox"
            onChange={handleChange}
            onClick={() => setFillCheckbox(!fillCheckbox)}
            value={values.checkbox}
          ></FooterInput>
        </FooterForm>
      )}
      {isSubmitted ? (
        ""
      ) : (
        <FooterInputButton type="submit" form="footer_form">
          Send
        </FooterInputButton>
      )}
      <FooterCopyright>CAA ?? 2022. All rights reserved.</FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
