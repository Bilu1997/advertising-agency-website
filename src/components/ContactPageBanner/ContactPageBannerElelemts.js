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
  justify-content: center;
  height: 400px;
`;

export const ContactPageBannerImg = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 400px;
  z-index: -1;
  background-color: ${palette.gray400};
`;

export const ContactPageBannerHeader = styled.h1`
  font-size: ${typhography.heading1};
  max-width: 480px;
  text-align: center;
  padding: 124px 12px 0 12px;
  color: ${palette.gray100};
  text-shadow: 0px 4px 4px rgb(0, 0, 0, 0.35);
`;
