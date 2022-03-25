import React, { useState } from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  RightContainter,
  LeftContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavLinkContainer,
  MobileIcon,
  ExtendedNavLink,
} from "./NavbarElements";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <>
      <Nav openMobileMenu={openMobileMenu}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavLogo to="/">CAA</NavLogo>
          </LeftContainer>
          <RightContainter>
            <NavLinkContainer>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Offer</NavLink>
              <NavLink to="/">Contact</NavLink>
              <MobileIcon
                onClick={() => {
                  setOpenMobileMenu((curr) => !curr);
                }}
              >
                {openMobileMenu ? <>&#10005;</> : <>&#8801;</>}
              </MobileIcon>
            </NavLinkContainer>
          </RightContainter>
        </NavbarInnerContainer>
        {openMobileMenu && (
          <NavbarExtendedContainer>
            <ExtendedNavLink to="/">Home</ExtendedNavLink>
            <ExtendedNavLink to="/">Offer</ExtendedNavLink>
            <ExtendedNavLink to="/">Contact</ExtendedNavLink>
          </NavbarExtendedContainer>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
