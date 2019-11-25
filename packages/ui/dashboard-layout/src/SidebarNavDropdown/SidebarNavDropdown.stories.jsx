/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter } from 'react-router-dom';
import { DocumentIcon } from '../../../icons/src';

import Sidebar from '../Sidebar';
import Layout from '../Layout';

import SidebarNav from '../SidebarNav';
import SidebarNavDropdown from './SidebarNavDropdown';

storiesOf('packages/dashboard-layout/SidebarNavDropdown', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <StaticRouter location="/">
          <SidebarNav>
            <SidebarNavDropdown
              key="documents"
              text="Документы"
              Icon={DocumentIcon}
              counterValue="5"
            >
              <SidebarNavDropdown.Item text="Входящие" to="/incoming" />
              <SidebarNavDropdown.Item text="Исходящие" to="outgoing" />
              <SidebarNavDropdown.Item text="Черновики" to="/drafts" />
            </SidebarNavDropdown>
          </SidebarNav>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);

storiesOf('packages/dashboard-layout/SidebarNavDropdown', module).add(
  'without counter',
  () => (
    <Layout>
      <Sidebar>
        <StaticRouter location="/">
          <SidebarNav>
            <SidebarNavDropdown
              key="documents"
              text="Документы"
              Icon={DocumentIcon}
            >
              <SidebarNavDropdown.Item text="Входящие" to="/incoming" />
              <SidebarNavDropdown.Item text="Исходящие" to="outgoing" />
              <SidebarNavDropdown.Item text="Черновики" to="/drafts" />
            </SidebarNavDropdown>
          </SidebarNav>
        </StaticRouter>
      </Sidebar>
    </Layout>
  ),
);
