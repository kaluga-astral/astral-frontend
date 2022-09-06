import React from 'react';

import Form from '../Form';

import TextField from './TextField';

const args = {
  label: 'Текст',
  helperText: 'Вводите аккуратно',
};

export default {
  title: 'forms/TextField',
  component: TextField,
  args,
};

// eslint-disable-next-line react/prop-types
const Template = ({ options, ...props }) => {
  return (
    <Form onSubmit={values => console.log('values', values)}>
      {() => (
        <>
          <TextField {...props} name="text" />
        </>
      )}
    </Form>
  );
};

export const Default = Template.bind({});
