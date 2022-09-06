import React from 'react';

import Form from '../Form';

import AsyncAutocompleteField from './AsyncAutocompleteField';

const args = {
  freeSolo: false,
  disableClearable: false,
  prefetch: false,
  label: 'Фрукты',
  options: [
    { value: 'orange', name: 'Апельсин' },
    { value: 'apple', name: 'Яблоко' },
  ],
};

export default {
  title: 'forms/AsyncAutocompleteField',
  component: AsyncAutocompleteField,
  args,
};

// eslint-disable-next-line react/prop-types
const Template = ({ options, ...props }) => {
  const fetchOptions = () =>
    new Promise(resolve => {
      setTimeout(() => {
        // eslint-disable-next-line react/prop-types
        resolve(options);
      }, 2000);
    });

  return (
    <Form
      onSubmit={values => console.log('values', values)}
      subscription={{ values: true }}
    >
      {({ values }) => (
        <>
          <AsyncAutocompleteField
            {...props}
            fetchOptions={fetchOptions}
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
