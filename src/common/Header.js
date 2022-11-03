import React, { useState } from "react";
import {
  Root,
  NavMain,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  NavTabMenu,
  StyledLink,
} from "./NavBarElements";

import logo from "../images/logo.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import ClassNames from "classnames";

function Header() {
  const [isMenuOpen] = useState(false);
  const isMinWidth723 = useMediaQuery("(min-width: 844px)");

  return (
    <>
      <Root>
        <NavMain>
          <NavMenu>
            <Logo src={logo} alt="" />
            {/* {isMinWidth723 && (
              <>
                <StyledNavLink to="/" activeStyle>
                  Home
                </StyledNavLink>
                <StyledNavLink to="/products" activeStyle>
                  Products
                </StyledNavLink>
                <StyledNavLink to="/why-us" activeStyle>
                  Why us?
                </StyledNavLink>
                <StyledNavLink to="/pricing" activeStyle>
                  Pricing
                </StyledNavLink>
              </>
            )} */}
          </NavMenu>
          <NavBtn>
            <StyledLink to="/sign-up">Sign In</StyledLink>
            {isMinWidth723 && <NavBtnLink to="/demo">Request Demo</NavBtnLink>}
            {/* ) : (
              <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img src={menuSvg} alt="" />
              </MenuButton>
            )} */}
          </NavBtn>
        </NavMain>
      </Root>
      <NavTabMenu className={ClassNames({ isMenuOpen })}>
        {/* {!isMinWidth723 && (
          <>
            <StyledNavLink to="/" activeStyle>
              Home
            </StyledNavLink>
            <StyledNavLink to="/products" activeStyle>
              Products
            </StyledNavLink>
            <StyledNavLink to="/why-us" activeStyle>
              Why us?
            </StyledNavLink>
            <StyledNavLink to="/pricing" activeStyle>
              Pricing
            </StyledNavLink>
          </>
        )} */}
      </NavTabMenu>
    </>
  );
}

export default Header;
