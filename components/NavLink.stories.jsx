import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { MemoryRouter } from 'react-router-dom';

import NavLink from './NavLink';

storiesOf('NavLink', module).add('default', () => {
  const children = text('children', 'Default text');

  return (
    <MemoryRouter initialEntries={['/']}>
      <NavLink to="/another-url">{children}</NavLink>
    </MemoryRouter>
  );
});
