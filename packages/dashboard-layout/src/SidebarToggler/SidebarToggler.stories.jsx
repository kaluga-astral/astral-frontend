/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Sidebar from '../Sidebar';
import Layout from '../Layout';

import SidebarToggler from './SidebarToggler';

storiesOf('packages/dashboard-layout/SidebarToggler', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <SidebarToggler />
      </Sidebar>
    </Layout>
  ),
);
