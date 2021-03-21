import React from 'react';
import { FaBars } from 'react-icons/fa';
import Header from '../components/Header';

const HeaderContainer = () => {
  return (
    <>
      <Header>
        <Header.Container>
          <Header.Logo to='/'>Museum</Header.Logo>
          <Header.MobileIcon>
            <FaBars />
          </Header.MobileIcon>
          <Header.NavMenu>
            <Header.NavItem>
              <Header.NavLinks to='/about'>About</Header.NavLinks>
            </Header.NavItem>
            <Header.NavItem>
              <Header.NavLinks to='/discover'>Discover</Header.NavLinks>
            </Header.NavItem>
            <Header.NavItem>
              <Header.NavLinks to='/services'>Services</Header.NavLinks>
            </Header.NavItem>
            <Header.NavItem>
              <Header.NavLinks to='/signup'>Signup</Header.NavLinks>
            </Header.NavItem>
          </Header.NavMenu>
          <Header.NavBtn>
            <Header.NavBtnLink to='/signin'>Sign In</Header.NavBtnLink>
          </Header.NavBtn>
        </Header.Container>
      </Header>
    </>
  );
};

export default HeaderContainer;
