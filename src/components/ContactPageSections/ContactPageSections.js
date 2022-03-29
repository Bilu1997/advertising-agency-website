import React from "react";
import { specialist1, specialist2, specialist3 } from "./SpecialistsData";
import {
  ContactPageSectionContainer,
  ContactPageSectionHeader,
  ContactPageSectionParagraph,
  ContactPageSectionSpecialistsGrid,
  ContactPageSectionSpecialistsImg,
  ContactPageSectionSpecialiststsName,
  ContactPageSectionSpecialistsPosition,
  ContactPageSectionSpecialistsTel,
  ContactPageSectionSpecialistsWrapper,
} from "./ContactPageElements";

const ContactPageSections = () => {
  return (
    <>
      <ContactPageSectionContainer>
        <ContactPageSectionHeader>Our specialists</ContactPageSectionHeader>
        <ContactPageSectionParagraph>
          Everyone in our company got a lot of experince in e-business
        </ContactPageSectionParagraph>
        <ContactPageSectionSpecialistsGrid>
          <ContactPageSectionSpecialistsWrapper>
            <ContactPageSectionSpecialistsImg src={specialist1.img} />
            <ContactPageSectionSpecialiststsName>
              {specialist1.name}
            </ContactPageSectionSpecialiststsName>
            <ContactPageSectionSpecialistsPosition>
              {specialist1.position}
            </ContactPageSectionSpecialistsPosition>
            <ContactPageSectionSpecialistsTel>
              {specialist1.tel}
            </ContactPageSectionSpecialistsTel>
          </ContactPageSectionSpecialistsWrapper>
          <ContactPageSectionSpecialistsWrapper>
            <ContactPageSectionSpecialistsImg src={specialist2.img} />
            <ContactPageSectionSpecialiststsName>
              {specialist2.name}
            </ContactPageSectionSpecialiststsName>
            <ContactPageSectionSpecialistsPosition>
              {specialist2.position}
            </ContactPageSectionSpecialistsPosition>
            <ContactPageSectionSpecialistsTel>
              {specialist2.tel}
            </ContactPageSectionSpecialistsTel>
          </ContactPageSectionSpecialistsWrapper>
          <ContactPageSectionSpecialistsWrapper>
            <ContactPageSectionSpecialistsImg src={specialist3.img} />
            <ContactPageSectionSpecialiststsName>
              {specialist3.name}
            </ContactPageSectionSpecialiststsName>
            <ContactPageSectionSpecialistsPosition>
              {specialist3.position}
            </ContactPageSectionSpecialistsPosition>
            <ContactPageSectionSpecialistsTel>
              {specialist3.tel}
            </ContactPageSectionSpecialistsTel>
          </ContactPageSectionSpecialistsWrapper>
        </ContactPageSectionSpecialistsGrid>
      </ContactPageSectionContainer>
    </>
  );
};

export default ContactPageSections;
