/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('packages/components/Button', module).add('with text', () => (
  <Button>Hello Button</Button>
));
