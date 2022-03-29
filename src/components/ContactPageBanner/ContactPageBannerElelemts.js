import styled from "styled-components";
import { typhography } from "../../styles/Typhography";
import { palette } from "../../styles/Colorpallete";

export const ContactPageBannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  align-items: center;
  height: 400px;
`;

export const ContactPageBannerImg = styled.img`
  position: absolute;
  object-fit: contain;
  width: 100%;
  height: 400px;
  z-index: -1;
`;

export const ContactPageBannerHeader = styled.h1`
  font-size: ${typhography.heading1};
  max-width: 480px;
  text-align: center;
  padding: 0 12px 0 12px;
`;
