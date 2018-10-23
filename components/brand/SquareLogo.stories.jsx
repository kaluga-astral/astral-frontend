import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs';

import SquareLogo from './SquareLogo';

storiesOf('brand', module).add('SquareLogo', () => {
  const width = number('width', 100);
  const height = number('height', undefined);
  const color = select(
    'color',
    {
      primary: 'primary',
      monochrome: 'monochrome',
    },
    'primary',
  );

  return <SquareLogo width={width} height={height} color={color} />;
});
