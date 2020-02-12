/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';
import { OrganizationNotFoundIcon } from '@astral-frontend/icons';

import Sidebar from '../Sidebar';
import Layout from '../Layout';
import AsideNavLink from './AsideNavLink';
import AsideNav from '../AsideNav';

storiesOf('packages/dashboard-layout/AsideNavLink', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <StaticRouter>
          <AsideNav location="/">
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
          </AsideNav>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);
