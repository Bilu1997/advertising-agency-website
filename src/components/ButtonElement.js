import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { palette } from "../styles/Colorpallete";
import { typhography } from "../styles/Typhography";

export const Button = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 56px;
  font-size: ${typhography.paragraphLarge};
  font-weight: bold;
  border-radius: 13px;
  border-style: none;
  background-color: ${({ btnlight }) =>
    btnlight ? palette.gray100 : palette.gray900};
  color: ${({ btnLight }) => (btnLight ? palette.gray900 : palette.gray100)};
  cursor: pointer;

  @media (max-width: 480px) {
    width: 124px;
    height: 48px;
    font-size: ${typhography.paragraphNormal};
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${palette.green};
  }
`;
