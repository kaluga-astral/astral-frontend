/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';
import { OrganizationNotFoundIcon } from '../../../icons/src';

import Sidebar from '../Sidebar';
import SidebarNav from './SidebarNav';
import Layout from '../Layout';
import SidebarNavLink from '../SidebarNavLink';

storiesOf('packages/dashboard-layout/SidebarNav', module).add('default', () => (
  <Layout>
    <Sidebar>
      <StaticRouter location="/">
        <SidebarNav />
      </StaticRouter>
    </Sidebar>
  </Layout>
));

storiesOf('packages/dashboard-layout/SidebarNav', module).add(
  'SidebarNav with item',
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
          </SidebarNav>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);
