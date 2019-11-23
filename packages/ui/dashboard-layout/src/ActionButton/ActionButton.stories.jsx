/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { OrganizationNotFoundIcon } from '../../../icons/src';

import ActionButton from './ActionButton';

storiesOf('packages/dashboard-layout/ActionButton', module).add(
  'default',
  () => (
    <ActionButton>
      <ActionButton.Text>Добавить</ActionButton.Text>
    </ActionButton>
  ),
);
storiesOf('packages/dashboard-layout/ActionButton', module).add(
  'with icon',
  () => (
    <ActionButton>
      <ActionButton.Icon>
        <OrganizationNotFoundIcon />
      </ActionButton.Icon>
      <ActionButton.Text>Добавить</ActionButton.Text>
    </ActionButton>
  ),
);
