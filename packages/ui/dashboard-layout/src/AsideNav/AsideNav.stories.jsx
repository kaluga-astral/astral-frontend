/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';
import { OrganizationNotFoundIcon } from '@astral-frontend/icons';

import Sidebar from '../Sidebar';
import AsideNav from './AsideNav';
import Layout from '../Layout';
import AsideNavLink from '../AsideNavLink';

storiesOf('packages/dashboard-layout/AsideNav', module).add('default', () => (
  <Layout>
    <Sidebar>
      <StaticRouter location="/">
        <AsideNav />
      </StaticRouter>
    </Sidebar>
  </Layout>
));

storiesOf('packages/dashboard-layout/AsideNav', module).add(
  'AsideNav with item',
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
          </AsideNav>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);
