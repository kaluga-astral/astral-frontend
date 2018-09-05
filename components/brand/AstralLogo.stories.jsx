import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import AstralLogo from './AstralLogo';

storiesOf('brand', module).add('AstralLogo', () => {
  const width = number('width', 200);
  const height = number('height', undefined);

  return <AstralLogo width={width} height={height} />;
});
