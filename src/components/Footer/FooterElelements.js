import styled from "styled-components";
import { typhography } from "../../styles/Typhography";
import { palette } from "../../styles/Colorpallete";

export const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 1024px;
  align-items: center;
  overflow: hidden;
`;
export const FooterBgImage = styled.img`
  height: 1024px;
  object-fit: cover;
  width: 100%;
  position: absolute;
  z-index: -1;
  filter: brightness(35%);
  opacity: 90%;
`;
export const FooterHeading = styled.h1`
  padding-top: 24px;
  font-size: ${typhography.heading1};
  color: ${palette.gray100};
  text-align: center;

  &:nth-child(2) {
    margin-top: -48px;
  }

  @media (max-width: 600px) {
    font-size: ${typhography.heading3};
    width: 320px;

    &:nth-child(2) {
      margin-top: -36px;
    }
  }
`;

export const FooterParagraph = styled.p`
  margin-top: -2px;
  width: 450px;
  font-weight: 300;
  text-align: center;
  font-size: ${typhography.paragraphLarge};
  color: ${palette.gray100};
  padding-bottom: 48px;

  @media (max-width: 600px) {
    width: 340px;
  }
`;

export const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 480px;
  color: ${palette.gray100};
  font-weight: 300;
  font-size: ${typhography.paragraphNormal};

  @media (max-width: 600px) {
    width: 315px;
    margin-top: -30px;
  }
`;

export const FooterInput = styled.input`
  margin-top: 24px;
  height: 56px;
  font-size: ${typhography.paragraphLarge};
  padding-left: 16px;

  &:nth-child(5) {
    margin-top: -4px;
    width: 24px;

    &:after {
      content: "I have read the terms and conditions.";
      font-size: ${typhography.paragraphNormal};
      color: ${palette.gray100};
      position: relative;
      display: flex;
      flex-direction: row;
      width: 400px;
      left: 32px;
      top: 19px;
    }
  }
`;

export const FooterInputButton = styled.button`
  width: 144px;
  height: 56px;
  font-size: ${typhography.paragraphLarge};
  color: ${palette.gray100};
  font-weight: bold;
  background-color: ${palette.green};
  border-radius: 13px;
  border: 0px;
  cursor: pointer;

  &:hover {
    background-color: #4deb83;
    transition: all 0.2s ease-in-out;
  }
`;

export const FooterCopyright = styled.small`
  font-size: ${typhography.paragraphNormal};
  color: ${palette.gray100};
  position: relative;
  top: 206px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  text-align: center;
  padding-bottom: 16px;

  @media (max-width: 600px) {
    top: 200px;
  }
`;
