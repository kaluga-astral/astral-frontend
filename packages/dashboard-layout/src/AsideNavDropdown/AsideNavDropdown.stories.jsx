/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';
import { DocumentIcon } from '@astral/icons';

import Sidebar from '../Sidebar';
import Layout from '../Layout';
import AsideNav from '../AsideNav';

import AsideNavDropdown from './AsideNavDropdown';

storiesOf('packages/dashboard-layout/AsideNavDropdown', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <StaticRouter location="/">
          <AsideNav>
            <AsideNavDropdown
              key="documents"
              text="Документы"
              Icon={DocumentIcon}
              counterValue="5"
            >
              <AsideNavDropdown.Item text="Входящие" to="/incoming" />
              <AsideNavDropdown.Item text="Исходящие" to="outgoing" />
              <AsideNavDropdown.Item text="Черновики" to="/drafts" />
            </AsideNavDropdown>
          </AsideNav>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);

storiesOf('packages/dashboard-layout/AsideNavDropdown', module).add(
  'without counter',
  () => (
    <Layout>
      <Sidebar>
        <StaticRouter location="/">
          <AsideNav>
            <AsideNavDropdown
              key="documents"
              text="Документы"
              Icon={DocumentIcon}
            >
              <AsideNavDropdown.Item text="Входящие" to="/incoming" />
              <AsideNavDropdown.Item text="Исходящие" to="outgoing" />
              <AsideNavDropdown.Item text="Черновики" to="/drafts" />
            </AsideNavDropdown>
          </AsideNav>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);
