import React from 'react';
import { storiesOf } from '@storybook/react';
import { date, text } from '@storybook/addon-knobs';

import { moment } from '../../utils';
import FormattedDate from './FormattedDate';

storiesOf('helpers', module).add('FormattedDate', () => {
  const value = moment(date('date', new Date('July 20 2018')));
  const format = text('format', undefined);

  return <FormattedDate date={value} format={format} />;
});
