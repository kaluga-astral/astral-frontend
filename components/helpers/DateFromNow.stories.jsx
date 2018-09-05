import React from 'react';
import { storiesOf } from '@storybook/react';
import { date } from '@storybook/addon-knobs';
import { moment } from '../../utils';

import DateFromNow from './DateFromNow';

storiesOf('helpers', module).add('DateFromNow', () => {
  const value = moment(date('date', new Date('July 20 2018')));

  return <DateFromNow value={value} />;
});
