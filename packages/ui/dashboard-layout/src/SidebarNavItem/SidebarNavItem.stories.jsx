/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter, NavLink } from 'react-router-dom';
import { ButtonBase } from '@astral-frontend/components';
import Sidebar from '../Sidebar';
import Layout from '../Layout';
import SidebarNavItem from './SidebarNavItem';

storiesOf('packages/dashboard-layout/SidebarNavItem', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <SidebarNavItem
          component={() => (
            <ButtonBase
              component={() => (
                <StaticRouter location="/">
                  <NavLink to="/">Ссылка</NavLink>
                </StaticRouter>
              )}
            />
          )}
        />
      </Sidebar>
    </Layout>
  ),
);
