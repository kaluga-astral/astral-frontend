import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import SquareLogo from './SquareLogo';

storiesOf('Brand', module).add('SquareLogo', () => {
  const width = number('width', 100);
  const height = number('height', null);

  return <SquareLogo width={width} height={height} />;
});
