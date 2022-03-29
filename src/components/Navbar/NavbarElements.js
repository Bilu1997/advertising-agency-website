import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { palette } from "../../styles/Colorpallete";
import { typhography } from "../../styles/Typhography";
import { Link as LinkS } from "react-scroll";

export const NavContainer = styled.div`
  height: 100px;
  width: 100%;
`;
export const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: ${palette.gray900};
  width: 100%;
  height: ${(props) => (props.openMobileMenu ? "100vh" : "100px")};
  top: 0;
  z-index: 999;
  overflow: hidden;
  @media (min-width: 900px) {
    height: 100px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: ${palette.gray100};
  text-decoration: none;
  font-size: ${typhography.heading1};
  font-weight: bold;
  text-align: left;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
`;

export const RightContainter = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavLink = styled(LinkR)`
  font-size: ${typhography.heading4};
  color: ${palette.gray100};
  text-decoration: none;
  text-align: right;
  padding-left: 60px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavbarInnerContainer = styled.div`
  height: 100px;
  display: flex;
  padding-left: 204px;
  padding-right: 204px;

  @media (max-width: 900px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;

  @media (min-width: 900px) {
    display: none;
  }
`;
export const ExtendedNavLink = styled(LinkR)`
  font-size: ${typhography.heading2};
  color: ${palette.gray100};
  text-decoration: none;
  padding-top: 32px;
  width: 180px;
  text-align: center;
`;

export const NavLinkContainer = styled.div`
  display: flex;
`;

export const MobileIcon = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 48px;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;
