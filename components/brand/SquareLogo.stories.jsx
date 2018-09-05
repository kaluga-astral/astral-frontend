import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import SquareLogo from './SquareLogo';

storiesOf('brand', module).add('SquareLogo', () => {
  const width = number('width', 100);
  const height = number('height', undefined);

  return <SquareLogo width={width} height={height} />;
});
