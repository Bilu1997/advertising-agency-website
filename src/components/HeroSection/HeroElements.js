import styled from "styled-components";
import { palette } from "../../styles/Colorpallete";
import { typhography } from "../../styles/Typhography";
import { Link as LinkS } from "react-scroll";

export const HeroContainer = styled.section`
  max-height: 919px;
  background-position: center;
  background-size: cover;
  object-fit: cover;
  overflow: hidden;
`;

export const HeroImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 919px;
  position: absolute;
  top: 0;
  z-index: -1;

  @media (max-width: 900px) {
    height: 780px;
  }

  @media (max-width: 480px) {
    height: 680px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 204px;
  padding-top: 216px;
  width: 451px;
  z-index: 3;

  @media (max-width: 900px) {
    padding-left: 0px;
    padding-top: 100px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 320px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${typhography.heading2};
  color: ${palette.gray100};
  line-height: ${typhography.lineHeight};

  @media (max-width: 480px) {
    font-size: ${typhography.heading3};
  }
`;

export const HeroParagraph = styled.p`
  font-weight: 300;
  font-size: ${typhography.paragraphLarge};
  line-height: ${typhography.lineHeight};
  color: ${palette.gray100};
  margin-top: -24px;

  @media (max-width: 900px) {
    margin-top: -16px;
  }
  @media (max-width: 480px) {
    font-size: ${typhography.paragraphNormal};
  }
`;

export const OfferBtn = styled.button`
  width: 144px;
  height: 56px;
  font-size: ${typhography.paragraphLarge};
  font-weight: bold;
  border-radius: 12px;
  border-style: none;
  background-color: ${palette.gray900};
  color: ${palette.gray100};

  @media (max-width: 480px) {
    width: 124px;
    height: 48px;
    font-size: ${typhography.paragraphNormal};
  }
`;
