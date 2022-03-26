import styled from "styled-components";
import { palette } from "../../styles/Colorpallete";
import { typhography } from "../../styles/Typhography";
import icon from "../../assets/checkIcon.svg";

export const HomeOfferContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${palette.gray100};
  justify-content: center;
  z-index: -1;
`;

export const HomeOfferTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 680px;
  color: ${palette.gray900};
`;

export const HomeOfferHeading = styled.h1`
  font-size: ${typhography.heading1};
  margin-top: 40px;
`;

export const HomeOfferWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 50px;
`;

export const HomeOfferCards = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 120px;
`;

export const HomeOfferParagraph = styled.p`
  margin-top: -4px;
  font-size: ${typhography.heading4};
`;

export const HomeOfferBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 21px 0px 21px;
  width: 315px;
  height: 656px;
  background-color: ${palette.gray900};
  border-radius: 11px;
`;

export const HomeOfferIcon = styled.img`
  width: 64px;
  height: 64px;
  padding-top: 34px;
  padding-bottom: 8px;
`;
export const HomeOfferTitle = styled.h2`
  color: ${palette.gray100};
  text-align: center;
  padding-bottom: 32px;
`;

export const HomeOfferList = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${palette.gray100};
  width: 225px;
`;

export const HomeOfferText = styled.li`
  color: ${palette.gray100};
  list-style: none;
  list-style-position: outside;
  align-items: center;
  justify-content: center;
  text-indent: -2.3em;
  padding-bottom: 26px;
  padding-left: 12px;
  padding-right: 12px;

  &:before {
    content: url(${icon});
    padding-right: 12px;
    vertical-align: middle;
  }
`;
