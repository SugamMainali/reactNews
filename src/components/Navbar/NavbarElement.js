import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: 700;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 760px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 25px;
    trasnform: traslate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-item: center;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 2em;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  text-decoration: none;

  &.active {
    border-bottom: 10px solid #01bf71;
  }

  &.hover {
    border-bottom: 5px solid #01bf71;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const NavMenuLink = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 2em;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  text-decoration: none;

  &.active {
    border-bottom: 10px solid #01bf71;
  }

  &.hover {
    border-bottom: 5px solid #01bf71;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  padding: 10px 22px;
  color: #010606;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  outline: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  text-decoration: none;

  &:hover,
  &:focus {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
