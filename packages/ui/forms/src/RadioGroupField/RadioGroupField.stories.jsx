import React from 'react';

import Form from '../Form';
import SubmitButton from '../SubmitButton';

import RadioGroupField from './RadioGroupField';

const args = {
  groupLabel: 'Тариф',
  options: [
    { label: 'Базовый', value: 'base' },
    { label: 'Расширенный', value: 'extend' },
  ],
  row: true,
};

const Template = props => (
  <Form
    onSubmit={values => console.log('values', values)}
    subscription={{ values: true }}
  >
    {({ values }) => (
      <>
        <RadioGroupField required name="radio" {...props} />
        <p>Value: {values.radio}</p>
        <SubmitButton>Submit</SubmitButton>
      </>
    )}
  </Form>
);

export default {
  title: 'forms/RadioGroupField',
  component: Template,
  args,
};

export const Default = Template.bind({});
