import React, { useState } from "react";
import {
  TrustedUsContainer,
  TrustedUsHeading,
  TrustedUsParagraph,
  CompaniesCol,
  CompaniesTable,
} from "./TrustedUsElements";
import Images from "./Images";
import { Data } from "../../Data/Data";

const TrustedUs = () => {
  const [expandedList, setExpandedList] = useState(false);

  return (
    <>
      <TrustedUsContainer>
        <TrustedUsHeading>{Data.trustedUsHeading}</TrustedUsHeading>
        <TrustedUsParagraph>{Data.trustedUsPragraph}</TrustedUsParagraph>
        <CompaniesTable>
          <CompaniesCol src={Images.comp1}></CompaniesCol>
          <CompaniesCol src={Images.comp2}></CompaniesCol>
          <CompaniesCol src={Images.comp3}></CompaniesCol>
        </CompaniesTable>
        <CompaniesTable>
          <CompaniesCol src={Images.comp4}></CompaniesCol>
          <CompaniesCol src={Images.comp5}></CompaniesCol>
          <CompaniesCol src={Images.comp6}></CompaniesCol>
        </CompaniesTable>
        <CompaniesTable>
          <CompaniesCol src={Images.comp7}></CompaniesCol>
          <CompaniesCol src={Images.comp8}></CompaniesCol>
          <CompaniesCol src={Images.comp9}></CompaniesCol>
        </CompaniesTable>
      </TrustedUsContainer>
    </>
  );
};

export default TrustedUs;
