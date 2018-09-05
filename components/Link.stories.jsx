import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { MemoryRouter } from 'react-router-dom';

import Link from './Link';

storiesOf('Link', module).add('default', () => {
  const children = text('children', 'Default text');

  return (
    <MemoryRouter initialEntries={['/']}>
      <Link to="/another-url">{children}</Link>
    </MemoryRouter>
  );
});
