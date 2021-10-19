import React from 'react';

import Form from '../Form';

import INNField from './INNField';

const args = {
  label: 'ИНН',
  helperText: 'Вводите аккуратно',
};

export default {
  title: 'forms/INNField',
  component: INNField,
  args,
};

// eslint-disable-next-line react/prop-types
const Template = ({ options, ...props }) => {
  return (
    <Form onSubmit={values => console.log('values', values)}>
      {() => (
        <>
          <INNField {...props} name="inn" />
        </>
      )}
    </Form>
  );
};

export const Default = Template.bind({});
