/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { StaticRouter, NavLink } from 'react-router-dom';
import { ButtonBase } from '@astral-frontend/components';
import Sidebar from '../Sidebar';
import Layout from '../Layout';
import SidebarNavItem from './SidebarNavItem';

const SidebarNavItemComponent = React.forwardRef((props, ref) => (
  <ButtonBase
    {...props}
    ref={ref}
    component={React.forwardRef((componentProps, componentRef) => (
      <StaticRouter>
        <NavLink {...componentProps} innerRef={componentRef}>
          Ссылка
        </NavLink>
      </StaticRouter>
    ))}
  />
));

storiesOf('packages/dashboard-layout/SidebarNavItem', module).add(
  'default',
  () => (
    <Layout>
      <Sidebar>
        <SidebarNavItem component={SidebarNavItemComponent} />
      </Sidebar>
    </Layout>
  ),
);
