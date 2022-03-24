import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { palette } from "../../styles/Colorpallete";
//import { Link as LinkR } from "react-scroll";

export const Nav = styled.nav`
  background: ${palette.black};
  height: 100px;
`;

export const NavContainer = styled.div`
  height: 80px;
  margin-left: 100px;
  margin-right: 100px;
`;

export const NavLogo = styled(LinkR)`
  color: ${palette.gray100};
  text-decoration: none;
`;
