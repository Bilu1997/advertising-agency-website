import styled from "styled-components";
import { palette } from "../../styles/Colorpallete";
import { typhography } from "../../styles/Typhography";

export const OfferContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ lightBg }) => (lightBg ? palette.gray100 : palette.gray900)};
  color: ${({ lightText }) => (lightText ? palette.gray100 : palette.gray900)};
  margin: 0 auto;
  padding-bottom: 56px;
`;

export const OfferHeading = styled.h1`
  font-size: ${typhography.heading1};
  text-align: center;
  padding: 0 12px 0 12px;
`;

export const OfferParagraph = styled.p`
  font-size: ${typhography.heading4};
  margin-top: -8px;
  max-width: 625px;
  text-align: center;
  padding: 0 12px 0 12px;
`;

export const OfferGridContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 370px 100px 370px;
  align-items: center;
  grid-gap: 32px;
  padding-left: 32px;

  @media (max-width: 1100px) {
    grid-template-columns: 100px 370px;
    padding-left: 0px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 70px 230px;
    padding-left: 0px;
  } ;
`;

export const OfferGridTextWrapper = styled.div`
  max-width: 360px;

  @media (max-width: 480px) {
    max-width: 230px;
  }
`;

export const OfferGridIconLeft = styled.img`
  height: 100px;
  width: 100px;
  padding-left: 16px;
  padding-top: 16px;
  fill: white;

  @media (max-width: 480px) {
    height: 70px;
    width: 70px;
    padding-left: 16px;
  }
`;

export const OfferGridTitleLeft = styled.h4`
  font-size: ${typhography.heading4};
`;

export const OfferGridDescriptionLeft = styled.p`
  margin-top: -24px;
  font-size: ${typhography.paragraphLarge};
  font-weight: 300;
  color: ${({ lightText }) => (lightText ? palette.gray100 : palette.gray500)};
  @media (max-width: 480px) {
    padding-right: 16px;
  }
`;

export const OfferGridIconRight = styled.img`
  height: 100px;
  width: 100px;
  padding-left: 16px;
  padding-top: 16px;

  @media (max-width: 480px) {
    height: 70px;
    width: 70px;
  }
`;

export const OfferGridTitleRight = styled.h4`
  font-size: ${typhography.heading4};
`;

export const OfferGridDescriptionRight = styled.p`
  margin-top: -24px;
  font-size: ${typhography.paragraphLarge};
  font-weight: 300;
`;

export const OfferBtn = styled.button`
  width: 144px;
  height: 56px;
  border-radius: 13px;
  background-color: ${palette.green};
  font-size: ${typhography.paragraphLarge};
  font-weight: bold;
  color: ${palette.gray100};
  border: none;
  margin-top: 48px;
`;
