/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';
import { ButtonBase } from '@astral-frontend/components';
import { OrganizationNotFoundIcon } from '../../../icons/src';

import Sidebar from '../Sidebar';
import Layout from '../Layout';
import SidebarNavLink from '../SidebarNavLink';
import SidebarNav from '../SidebarNav';
import SidebarNavItemToggleButton from '../SidebarNavItemToggleButton';
import SidebarNavDropdown from '../SidebarNavDropdown';
import SidebarTooltip from './SidebarTooltip';

storiesOf('packages/dashboard-layout/SidebarTooltip', module).add(
  'default',
  () => (
    <SidebarTooltip text="Hello">
      <ButtonBase
        style={{
          width: '100px',
          height: '50px',
          backgroundColor: 'lightblue',
          borderRadius: '10px',
        }}
      >
        Hello
      </ButtonBase>
    </SidebarTooltip>
  ),
);

storiesOf('packages/dashboard-layout/SidebarTooltip', module).add(
  'sidebar with items',
  () => (
    <Layout>
      <Sidebar>
        <StaticRouter location="/">
          <SidebarNav>
            <SidebarNavLink
              key="home"
              to="/"
              exact
              Icon={OrganizationNotFoundIcon}
              text="Главная"
            />
            <SidebarNavLink
              key="home"
              to="/products"
              exact
              Icon={OrganizationNotFoundIcon}
              text="Продукты"
            />
            <SidebarNavDropdown
              key="documents"
              text="Документы"
              Icon={OrganizationNotFoundIcon}
            >
              <SidebarNavDropdown.Item text="Входящие" to="/incoming" />
              <SidebarNavDropdown.Item text="Исходящие" to="outgoing" />
              <SidebarNavDropdown.Item text="Черновики" to="/drafts" />
            </SidebarNavDropdown>
          </SidebarNav>
          <SidebarNavItemToggleButton />
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);
