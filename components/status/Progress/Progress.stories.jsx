import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs';

import Progress from './Progress';

storiesOf('Progress', module)
  .add('default', () => <Progress />)
  .add('query', () => <Progress variant="query" />)
  .add('determinate', () => {
    const value = number('value', 50, {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    });
    const color = select(
      'color',
      {
        primary: 'primary',
        secondary: 'secondary',
      },
      'primary',
    );

    return <Progress variant="determinate" color={color} value={value} />;
  });
