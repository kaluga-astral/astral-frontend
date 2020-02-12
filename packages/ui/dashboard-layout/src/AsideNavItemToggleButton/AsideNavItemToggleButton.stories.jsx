/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Sidebar from '../Sidebar';
import Layout from '../Layout';
import AsideNavItemToggleButton from './AsideNavItemToggleButton';

storiesOf('packages/dashboard-layout/AsideNavItemToggleButton', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <AsideNavItemToggleButton />
      </Sidebar>
    </Layout>
  ),
);
