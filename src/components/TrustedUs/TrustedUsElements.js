import styled from "styled-components";
import { typhography } from "../../styles/Typhography";
import { palette } from "../../styles/Colorpallete";

export const TrustedUsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TrustedUsHeading = styled.h1`
  font-size: ${typhography.heading1};
`;

export const TrustedUsParagraph = styled.p`
  margin-top: -8px;
  font-size: ${typhography.paragraphLarge};
`;

export const CompaniesTable = styled.div`
  display: flex;
  width: 984px;
  height: 200px;
  padding-bottom: 100px;
`;

export const CompaniesCol = styled.img`
  flex: 33.33%;
`;
