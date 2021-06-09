/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Autocomplete from './Autocomplete';

storiesOf('packages/components/Autocomplete', module).add('default', () => (
  <Autocomplete
    label="Фрукты"
    suggestions={[
      { key: '0', value: 'orange', label: 'Апельсин' },
      { key: '1', value: 'apple', label: 'Яблоко' },
    ]}
  />
));
