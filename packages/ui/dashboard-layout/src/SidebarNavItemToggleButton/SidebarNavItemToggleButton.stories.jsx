/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from '../Sidebar';
import Layout from '../Layout';
import SidebarNavItemToggleButton from './SidebarNavItemToggleButton';

storiesOf('packages/dashboard-layout/SidebarNavItemToggleButton', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <SidebarNavItemToggleButton />
      </Sidebar>
    </Layout>
  ),
);
