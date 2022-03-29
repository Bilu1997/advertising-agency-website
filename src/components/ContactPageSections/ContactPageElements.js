import styled from "styled-components";
import { typhography } from "../../styles/Typhography";
import { palette } from "../../styles/Colorpallete";

export const ContactPageSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const ContactPageSectionHeader = styled.h1`
  font-size: ${typhography.heading1};
  color: ${palette.gray900};
  text-align: center;
  padding: 0 12px 0 12px;
`;

export const ContactPageSectionParagraph = styled.h1`
  font-size: ${typhography.heading4};
  color: ${palette.gray900};
  text-align: center;
  margin-top: -8px;
  max-width: 625px;
  padding: 0 12px 0 12px;
`;

export const ContactPageSectionSpecialistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 68px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

export const ContactPageSectionSpecialistsImg = styled.img`
  height: 400px;
  width: 300px;
  object-fit: contain;
  border-radius: 13px;
`;

export const ContactPageSectionSpecialistsWrapper = styled.div``;

export const ContactPageSectionSpecialiststsName = styled.h4`
  text-transform: capitalize;
  margin-top: 16px;
  font-size: ${typhography.heading4};
  font-weight: bold;
`;
export const ContactPageSectionSpecialistsPosition = styled.p`
  margin-top: -24px;
  font-size: ${typhography.paragraphNormal};
  color: ${palette.gray500};
`;
export const ContactPageSectionSpecialistsTel = styled.p`
  margin-top: -8px;
  font-size: ${typhography.paragraphNormal};
  color: ${palette.gray900};
  padding-bottom: 32px;
`;
