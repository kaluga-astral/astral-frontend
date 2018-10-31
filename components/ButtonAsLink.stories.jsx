import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';

import { MemoryRouter } from 'react-router-dom';

import ButtonAsLink from './ButtonAsLink';

storiesOf('ButtonAsLink', module).add('default', () => {
  const disabled = boolean('disabled', false);
  const children = text('children', 'Default text');
  const variant = select(
    'variant',
    {
      flat: 'flat',
      rounded: 'rounded',
      float: 'float',
    },
    'flat',
  );
  const color = select(
    'color',
    {
      primary: 'primary',
      secondary: 'secondary',
    },
    'primary',
  );
  const size = select(
    'size',
    {
      medium: 'medium',
      large: 'large',
    },
    'medium',
  );

  return (
    <MemoryRouter initialEntries={['/']}>
      <ButtonAsLink to="/" disabled={disabled} variant={variant} size={size} color={color}>
        {children}
      </ButtonAsLink>
    </MemoryRouter>
  );
});
