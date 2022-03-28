import React from "react";

import {
  OfferContainer,
  OfferGridContainer,
  OfferGridDescriptionLeft,
  OfferGridTitleLeft,
  OfferHeading,
  OfferParagraph,
  OfferGridIconLeft,
  OfferGridDescriptionRight,
  OfferGridTitleRight,
  OfferGridIconRight,
  OfferGridTextWrapper,
  OfferBtn,
} from "./OfferSectionsElelements";

const OfferSections = ({
  header,
  paragraph,
  lightBg,
  lightText,
  title1,
  title2,
  title3,
  title4,
  title5,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  description1,
  description2,
  description3,
  description4,
  description5,
  grayIcon,
}) => {
  return (
    <>
      <OfferContainer lightBg={lightBg} lightText={lightText}>
        <OfferHeading lightText={lightText}>{header}</OfferHeading>
        <OfferParagraph>{paragraph}</OfferParagraph>
        <OfferGridContainer>
          <OfferGridIconLeft grayIcon={grayIcon} src={icon1} />
          <OfferGridTextWrapper>
            <OfferGridTitleLeft>{title1}</OfferGridTitleLeft>
            <OfferGridDescriptionLeft lightText={lightText}>
              {description1}
            </OfferGridDescriptionLeft>
          </OfferGridTextWrapper>
          <OfferGridIconRight grayIcon={grayIcon} src={icon2} />
          <OfferGridTextWrapper>
            <OfferGridTitleRight>{title2}</OfferGridTitleRight>
            <OfferGridDescriptionRight lightText={lightText}>
              {description2}
            </OfferGridDescriptionRight>
          </OfferGridTextWrapper>
        </OfferGridContainer>
        {/*Second row*/}
        <OfferGridContainer>
          <OfferGridIconLeft grayIcon={grayIcon} src={icon3} />
          <OfferGridTextWrapper>
            <OfferGridTitleLeft>{title3}</OfferGridTitleLeft>
            <OfferGridDescriptionLeft lightText={lightText}>
              {description3}
            </OfferGridDescriptionLeft>
          </OfferGridTextWrapper>
          <OfferGridIconRight grayIcon={grayIcon} src={icon4} />
          <OfferGridTextWrapper>
            <OfferGridTitleRight>{title4}</OfferGridTitleRight>
            <OfferGridDescriptionRight lightText={lightText}>
              {description4}
            </OfferGridDescriptionRight>
          </OfferGridTextWrapper>
        </OfferGridContainer>
        {/*Third row*/}
        <OfferGridContainer>
          <OfferGridIconLeft grayIcon={grayIcon} src={icon5} />
          <OfferGridTextWrapper>
            <OfferGridTitleLeft>{title5}</OfferGridTitleLeft>
            <OfferGridDescriptionLeft lightText={lightText}>
              {description5}
            </OfferGridDescriptionLeft>
          </OfferGridTextWrapper>
        </OfferGridContainer>
        <OfferBtn>Contact us</OfferBtn>
      </OfferContainer>
    </>
  );
};

export default OfferSections;
