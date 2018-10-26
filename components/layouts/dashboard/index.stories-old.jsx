import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Layout from './Layout';
import Container from './Container';

import Sidebar, {
  Nav, NavLink, NavDropdown, NavDropdownLink,
} from './Sidebar';
import Header, { MainTitle } from './Header';

const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="white" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

storiesOf('layouts/dashboard', module).add('Layout', () => (
  <MemoryRouter initialEntries={['/']}>
    <Layout>
      <Sidebar>
        <Nav>
          <NavLink to="/" icon={Icon} text="Sample text" />
          <NavLink to="/" icon={Icon} text="Sample text" />
          <NavLink to="/" icon={Icon} text="Sample text" />
          <NavDropdown icon={Icon} text="Dropdown">
            <NavDropdownLink to="/" text="Sample text" />
            <NavDropdownLink to="/" text="Sample text" />
            <NavDropdownLink to="/" text="Sample text" />
            <NavDropdownLink to="/" text="Sample text" />
            <NavDropdownLink to="/" text="Sample text" />
          </NavDropdown>
        </Nav>
      </Sidebar>
      <Container>
        <Header>
          <MainTitle>Main Title</MainTitle>
        </Header>
      </Container>
    </Layout>
  </MemoryRouter>
));
