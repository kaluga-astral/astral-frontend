/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Sidebar from '../Sidebar';
import Layout from '../Layout';
import AsideToggler from './AsideToggler';

storiesOf('packages/dashboard-layout/AsideToggler', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <AsideToggler />
      </Sidebar>
    </Layout>
  ),
);
