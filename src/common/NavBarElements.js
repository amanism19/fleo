import { NavLink, Link } from "react-router-dom";

import styled from "@emotion/styled";

export const Root = styled.nav`
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 12;
  box-shadow: 10px 10px 5px -10px rgba(206, 176, 147, 0.8);
  padding-inline: var(--margin-inline-root);
  @media (max-width: 844px) {
    flex-direction: column;
    align-items: stretch;
    padding-top: 15px;
    padding-bottom: 15px;
    gap: 7px;
  }
  /* position: fixed; */
  left: 0;
  right: 0;
  position: fixed;
  z-index: 100;
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  margin-right: 50px;
  @media (max-width: 765px) {
    margin-right: 20px;
  }
`;

export const NavMain = styled.nav`
  display: flex;
  justify-content: space-between;
  z-index: 12;
  height: 70px;
  max-width: var(--max-box-width);
  flex: 1;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #56402a;
`;

export const MenuButton = styled.button`
  text-decoration: none;
  font-weight: 700;
  color: #000;
  background: transparent;
  border: none;
  outline: none;
  padding: 5px 10px 1px;
  margin-left: 10px;
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
  color: #56402a;
  display: flex;
  font-weight: 700;
  font-size: 14px;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;

  height: 50%;
  cursor: pointer;
  &.active {
    color: #2a52e0;
    border-bottom: 2px solid #2a52e0;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const NavTabMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;

  white-space: nowrap;
  /* height: 50px; */
  padding: 25px 15px;
  width: 120px;
  justify-content: space-between;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
  position: fixed;
  top: 75px;
  right: 5px;
  background: #fff;
  box-shadow: 10px 10px 5px -10px rgba(206, 176, 147, 0.8),
    10px -10px 5px -10px rgba(206, 176, 147, 0.8);
  z-index: 50;
  transform: translateY(-225px);
  transition: 0.4s ease-in-out;
  &.isMenuOpen {
    transform: translateY(0px);
  }
  @media (min-width: 844px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const NavBtnLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #df581e;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  font-weight: 700;
  border: none;
  cursor: pointer;
  box-shadow: inset 0px 4px 4px rgba(255, 255, 255, 0.25);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    background: #c9450c;
    color: #56402a;
    color: #fff;
  }
`;
