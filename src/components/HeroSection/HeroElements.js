import styled from "styled-components";
import { palette } from "../../styles/Colorpallete";
import { typhography } from "../../styles/Typhography";

export const HeroContainer = styled.section`
  width: 100%;
  height: 919px;
  overflow: hidden;

  @media (max-width: 900px) {
    height: 780px;
  }

  @media (max-width: 480px) {
    height: 680px;
  }
`;

export const HeroImg = styled.img`
  height: 919px;
  object-fit: cover;
  width: 100%;
  position: absolute;
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
  max-width: 451px;
  z-index: 3;

  @media (max-width: 900px) {
    padding-top: 100px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    padding: 100px 12px 0 12px;
  }

  @media (max-width: 480px) {
    max-width: 320px;
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
