import React from 'react';
import { FaBars } from 'react-icons/fa';
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

const Header = ({ toggle }) => {
  return (
    <Nav>
      <Container>
        <Logo to='/museum'>Museum</Logo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='/about'>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/discover'>Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/services'>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/signup'>Signup</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Container>
    </Nav>
  );
};

// Header.Container = function NavbarContainer({ children, ...restProps }) {
//   return <Container {...restProps}>{children}</Container>;
// };

// Header.Logo = function NavbarLogo({ children, ...restProps }) {
//   return <Logo {...restProps}>{children}</Logo>;
// };

// Header.MobileIcon = function NavMobileIcon({ children, ...restProps }) {
//   return <MobileIcon {...restProps}>{children}</MobileIcon>;
// };

// Header.NavMenu = function NavbarNavMenu({ children, ...restProps }) {
//   return <NavMenu {...restProps}>{children}</NavMenu>;
// };
// Header.NavItem = function NavbarNavItem({ children, ...restProps }) {
//   return <NavItem {...restProps}>{children}</NavItem>;
// };

// Header.NavLinks = function NavbarNavLinks({ children, ...restProps }) {
//   return <NavLinks {...restProps}>{children}</NavLinks>;
// };
// Header.NavBtn = function NavbarNavBtn({ children, ...restProps }) {
//   return <NavBtn {...restProps}>{children}</NavBtn>;
// };
// Header.NavBtnLink = function NavbarNavBtnLink({ children, ...restProps }) {
//   return <NavBtnLink {...restProps}>{children}</NavBtnLink>;
// };
export default Header;
