import React from 'react';
import {
  Container,
  Logo,
  Nav,
  NavLinks,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavBtnLink,
} from './styles/header';

const Header = ({ children, ...restProps }) => {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Container = function NavbarContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function NavbarLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.MobileIcon = function NavMobileIcon({ children, ...restProps }) {
  return <MobileIcon {...restProps}>{children}</MobileIcon>;
};

Header.NavMenu = function NavbarNavMenu({ children, ...restProps }) {
  return <NavMenu {...restProps}>{children}</NavMenu>;
};
Header.NavItem = function NavbarNavItem({ children, ...restProps }) {
  return <NavItem {...restProps}>{children}</NavItem>;
};

Header.NavLinks = function NavbarNavLinks({ children, ...restProps }) {
  return <NavLinks {...restProps}>{children}</NavLinks>;
};
Header.NavBtn = function NavbarNavBtn({ children, ...restProps }) {
  return <NavBtn {...restProps}>{children}</NavBtn>;
};
Header.NavBtnLink = function NavbarNavBtnLink({ children, ...restProps }) {
  return <NavBtnLink {...restProps}>{children}</NavBtnLink>;
};
export default Header;
