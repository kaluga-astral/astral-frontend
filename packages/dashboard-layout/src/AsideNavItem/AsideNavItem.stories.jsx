/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavLink, StaticRouter } from 'react-router-dom';
import { ButtonBase } from '@astral/components';

import Sidebar from '../Sidebar';
import Layout from '../Layout';

import AsideNavItem from './AsideNavItem';

storiesOf('packages/dashboard-layout/AsideNavItem', module).add(
  'default',
  () => (
    <StaticRouter location="/">
      <Layout>
        <Sidebar>
          <AsideNavItem
            component={() => (
              <ButtonBase component={() => <NavLink to="/">Ссылка</NavLink>} />
            )}
          />
        </Sidebar>
      </Layout>
    </StaticRouter>
  ),
);
