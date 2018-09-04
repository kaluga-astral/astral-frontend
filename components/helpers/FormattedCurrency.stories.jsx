import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import FormattedCurrency from './FormattedCurrency';

storiesOf('helpers', module).add('FormattedCurrency', () => {
  const value = number('value', 100000000000000000);

  return <FormattedCurrency value={value} />;
});
