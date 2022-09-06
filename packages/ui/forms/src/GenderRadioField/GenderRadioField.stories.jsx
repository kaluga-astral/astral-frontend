import React from 'react';

import Form from '../Form';
import SubmitButton from '../SubmitButton';

import GenderRadioField from './GenderRadioField';

const args = {
  groupLabel: 'Пол',
  row: true,
};

const Template = props => (
  <Form
    onSubmit={values => console.log('values', values)}
    subscription={{ values: true }}
  >
    {({ values }) => (
      <>
        <GenderRadioField name="gender" {...props} />
        <p>Value: {values.radio}</p>
        <SubmitButton>Submit</SubmitButton>
      </>
    )}
  </Form>
);

export default {
  title: 'forms/GenderRadioField',
  component: Template,
  args,
};

export const Default = Template.bind({});
