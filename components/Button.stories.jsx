import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, array } from '@storybook/addon-knobs';

import Button from './Button';

const children = text('children', 'Default text');
const color = array('children', ['primary', 'secondary']);

storiesOf('Button', module).add('flat (default)', () => (
  <Button color={color} onClick={action('clicked')}>
    {children}
  </Button>
));
// .add('outlined', () => (
//   <Button variant="outlined" onClick={action('clicked')}>
//     {children}
//   </Button>
// ));
