import React from 'react';
import Sidebar from '../components/Sidebar';

const SidebarContainer = () => {
  return (
    <Sidebar>
      <Sidebar.Icon>
        <Sidebar.CloseIcon />
      </Sidebar.Icon>
      <Sidebar.Wrapper>
        <Sidebar.Menu>
          <Sidebar.Link to='about'>About</Sidebar.Link>
          <Sidebar.Link to='discover'>Discover</Sidebar.Link>
          <Sidebar.Link to='services'>Services</Sidebar.Link>
          <Sidebar.Link to='signup'>Sign Up</Sidebar.Link>
        </Sidebar.Menu>
        <Sidebar.Wrap>
          <Sidebar.Route to='/signin'>Sign In</Sidebar.Route>
        </Sidebar.Wrap>
      </Sidebar.Wrapper>
    </Sidebar>
  );
};

export default SidebarContainer;
