import React from 'react';
import { DatePickerUtilsProvider } from '@astral-frontend/components';

import Form from '../Form';

import DateField from './DateField';

const args = {
  autoOk: true,
};

export default {
  title: 'forms/DateField',
  component: DateField,
  args,
  argTypes: {
    variant: {
      options: ['dialog', 'inline', 'static'],
      control: { type: 'radio' },
    },
  },
};

const Template = props => {
  return (
    <DatePickerUtilsProvider>
      <Form
        onSubmit={values => console.log('values', values)}
        subscription={{ values: true }}
      >
        {({ values }) => (
          <>
            <DateField {...props} name="date" />
            <p>Value {String(values.date)}</p>
          </>
        )}
      </Form>
    </DatePickerUtilsProvider>
  );
};

export const Default = Template.bind({});

export const WithMinDate = Template.bind({});
WithMinDate.args = {
  ...WithMinDate.args,
  minDate: new Date(),
};
