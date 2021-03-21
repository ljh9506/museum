import React from 'react';
import {
  CloseIcon,
  Container,
  Icon,
  Wrapper,
  Wrap,
  Route,
  Link,
  Menu,
} from './styles/sidebar';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <Wrapper>
        <Menu>
          <Link to='about' onClick={toggle}>
            About
          </Link>
          <Link to='discover' onClick={toggle}>
            Discover
          </Link>
          <Link to='services' onClick={toggle}>
            Services
          </Link>
          <Link to='signup' onClick={toggle}>
            Sign Up
          </Link>
        </Menu>
        <Wrap>
          <Route to='/signin' onClick={toggle}>
            Sign In
          </Route>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

// Sidebar.Icon = function SidebarIcon({ children, ...restProps }) {
//   return <Icon {...restProps}>{children}</Icon>;
// };

// Sidebar.CloseIcon = function SidebarCloseIcon({ children, ...restProps }) {
//   return <CloseIcon {...restProps}>{children}</CloseIcon>;
// };
// Sidebar.Wrapper = function SidebarWrapper({ children, ...restProps }) {
//   return <Wrapper {...restProps}>{children}</Wrapper>;
// };
// Sidebar.Link = function SidebarLink({ children, ...restProps }) {
//   return <Link {...restProps}>{children}</Link>;
// };
// Sidebar.Wrap = function SidebarWrap({ children, ...restProps }) {
//   return <Wrap {...restProps}>{children}</Wrap>;
// };
// Sidebar.Route = function SidebarRoute({ children, ...restProps }) {
//   return <Route {...restProps}>{children}</Route>;
// };
// Sidebar.Menu = function SidebarMenu({ children, ...restProps }) {
//   return <Menu {...restProps}>{children}</Menu>;
// };
export default Sidebar;
