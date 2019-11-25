/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';
import { OrganizationNotFoundIcon } from '../../../icons/src';

import Sidebar from '../Sidebar';
import Layout from '../Layout';
import SidebarNavLink from './SidebarNavLink';
import SidebarNav from '../SidebarNav';

storiesOf('packages/dashboard-layout/SidebarNavLink', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <StaticRouter>
          <SidebarNav location="/">
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
          </SidebarNav>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);
