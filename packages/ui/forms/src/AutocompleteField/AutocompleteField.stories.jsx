import React from 'react';

import Form from '../Form';

import AutocompleteField from './AutocompleteField';

const args = {
  freeSolo: false,
  disableClearable: false,
  loading: false,
  label: 'Фрукты',
  options: [
    { value: 'orange', name: 'Апельсин' },
    { value: 'apple', name: 'Яблоко' },
  ],
};

export default {
  title: 'forms/AutocompleteField',
  component: AutocompleteField,
  args,
};

const Template = props => {
  return (
    <Form
      onSubmit={values => console.log('values', values)}
      subscription={{ values: true }}
    >
      {({ values }) => (
        <>
          <AutocompleteField
            {...props}
            name="fruit"
            getOptionLabel={({ name }) => name}
          />
          <p>Value {JSON.stringify(values.fruit)}</p>
        </>
      )}
    </Form>
  );
};

export const Default = Template.bind({});
