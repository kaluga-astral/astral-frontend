/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';
import { OrganizationNotFoundIcon, ArrowIcon } from '../../../icons/src';

import Sidebar from './Sidebar';
import Layout from '../Layout';
import SidebarNavLink from '../SidebarNavLink';
import SidebarNav from '../SidebarNav';
import SidebarNavItemToggleButton from '../SidebarNavItemToggleButton';
import SidebarNavDropdown from '../SidebarNavDropdown';
import CurrentUserInfo from '../CurrentUserInfo';

storiesOf('packages/dashboard-layout/Sidebar', module).add('default', () => (
  <Layout>
    <Sidebar />
  </Layout>
));

storiesOf('packages/dashboard-layout/Sidebar', module).add(
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
          <CurrentUserInfo avatarAlt="UN" userName="template@mail.com">
            <CurrentUserInfo.Item Icon={ArrowIcon} text="Выйти" />
          </CurrentUserInfo>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);
