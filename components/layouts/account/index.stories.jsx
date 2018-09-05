import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import AccountLayout, { Aside, Main } from './index';

storiesOf('Layouts/Account', module).add('Layout', () => (
  <MemoryRouter initialEntries={['/']}>
    <AccountLayout>
      <Aside title="Product name" />
      <Main title="Main title">
        <h1>Form</h1>
      </Main>
    </AccountLayout>
  </MemoryRouter>
));
