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
  NavContainer,
} from "./NavbarElements";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleClick = () => setOpenMobileMenu(!openMobileMenu);
  const closeMobileMenu = () => setOpenMobileMenu(false);
  return (
    <>
      <NavContainer>
        <Nav openMobileMenu={openMobileMenu}>
          <NavbarInnerContainer>
            <LeftContainer>
              <NavLogo to="/">CAA</NavLogo>
            </LeftContainer>
            <RightContainter>
              <NavLinkContainer>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/offer">Offer</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <MobileIcon onClick={handleClick}>
                  {openMobileMenu ? <>&#10005;</> : <>&#8801;</>}
                </MobileIcon>
              </NavLinkContainer>
            </RightContainter>
          </NavbarInnerContainer>
          {openMobileMenu && (
            <NavbarExtendedContainer onClick={closeMobileMenu}>
              <ExtendedNavLink to="/" onClick={handleClick}>
                Home
              </ExtendedNavLink>
              <ExtendedNavLink to="/offer" onClick={handleClick}>
                Offer
              </ExtendedNavLink>
              <ExtendedNavLink to="/contact" onClick={handleClick}>
                Contact
              </ExtendedNavLink>
            </NavbarExtendedContainer>
          )}
        </Nav>
      </NavContainer>
    </>
  );
};

export default Navbar;
