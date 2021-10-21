import React, { useState } from 'react';

import DatePicker from './DatePicker';
import DatePickerUtilsProvider from './DatePickerUtilsProvider';

const args = {
  inputFormat: 'dd.MM.yyyy',
};

export default {
  title: 'components/DatePicker',
  component: DatePicker,
  args,
};

const Template = props => {
  const [value, setValue] = useState(null);

  return (
    <DatePickerUtilsProvider>
      <DatePicker {...props} value={value} onChange={setValue} />
      <p>Value {String(value)}</p>
    </DatePickerUtilsProvider>
  );
};

export const Default = Template.bind({});
