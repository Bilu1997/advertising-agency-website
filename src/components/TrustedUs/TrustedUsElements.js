import styled from "styled-components";
import { typhography } from "../../styles/Typhography";
import { palette } from "../../styles/Colorpallete";

export const TrustedUsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const TrustedUsHeading = styled.h1`
  font-size: ${typhography.heading1};
  padding: 0px 12px 0px 12px;
`;

export const TrustedUsParagraph = styled.p`
  margin-top: -8px;
  font-size: ${typhography.paragraphLarge};
  padding: 0px 12px 0px 12px;
`;

export const CompaniesTable = styled.div`
  width: 984px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1060px) {
    width: 654px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    width: 327px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CompaniesCol = styled.img`
  width: 327px;
`;
