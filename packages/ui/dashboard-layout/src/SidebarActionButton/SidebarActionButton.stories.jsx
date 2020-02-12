/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { OrganizationNotFoundIcon } from '@astral-frontend/icons';

import SidebarActionButton from './index';

storiesOf('packages/dashboard-layout/SidebarActionButton', module)
  .add('default', () => (
    <SidebarActionButton>
      <SidebarActionButton.Text>Добавить</SidebarActionButton.Text>
    </SidebarActionButton>
  ))
  .add('with icon', () => (
    <SidebarActionButton>
      <SidebarActionButton.Icon>
        <OrganizationNotFoundIcon />
      </SidebarActionButton.Icon>
      <SidebarActionButton.Text>Добавить</SidebarActionButton.Text>
    </SidebarActionButton>
  ));
