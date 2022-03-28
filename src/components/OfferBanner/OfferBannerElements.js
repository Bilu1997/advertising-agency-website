import styled from "styled-components";
import { palette } from "../../styles/Colorpallete";
import { typhography } from "../../styles/Typhography";

export const OfferBannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  color: ${palette.gray100};
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
`;

export const OfferBannerImg = styled.img`
  position: absolute;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(65%);
  z-index: -1;
`;

export const OfferBannerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;
export const OfferBannerHeading = styled.h1`
  font-size: ${typhography.heading1};
  padding: 0 12px 0 12px;
  margin-top: -12px;
`;
