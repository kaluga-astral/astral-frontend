/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';

import { ArrowIcon, OrganizationNotFoundIcon } from '../../../icons';
import Layout from '../Layout';
import AsideNavLink from '../AsideNavLink';
import AsideNav from '../AsideNav';
import AsideNavItemToggleButton from '../AsideNavItemToggleButton';
import AsideNavDropdown from '../AsideNavDropdown';
import CurrentUserInfo from '../CurrentUserInfo';

import Sidebar from './Sidebar';

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
          <AsideNav>
            <AsideNavLink
              key="home"
              to="/"
              exact
              Icon={OrganizationNotFoundIcon}
              text="Главная"
            />
            <AsideNavLink
              key="home"
              to="/products"
              exact
              Icon={OrganizationNotFoundIcon}
              text="Продукты"
            />
            <AsideNavDropdown
              key="documents"
              text="Документы"
              Icon={OrganizationNotFoundIcon}
            >
              <AsideNavDropdown.Item text="Входящие" to="/incoming" />
              <AsideNavDropdown.Item text="Исходящие" to="outgoing" />
              <AsideNavDropdown.Item text="Черновики" to="/drafts" />
            </AsideNavDropdown>
          </AsideNav>
          <AsideNavItemToggleButton />
          <CurrentUserInfo avatarAlt="UN" userName="template@mail.com">
            <CurrentUserInfo.Item Icon={ArrowIcon} text="Выйти" />
          </CurrentUserInfo>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);
