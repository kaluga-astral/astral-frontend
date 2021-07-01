import React, { useState } from 'react';

import AsyncAutocomplete from './AsyncAutocomplete';

const args = {
  freeSolo: false,
  prefetch: true,
  disableClearable: false,
  label: 'Фрукты',
  options: [
    { value: 'orange', name: 'Апельсин' },
    { value: 'apple', name: 'Яблоко' },
  ],
};

export default {
  title: 'components/AsyncAutocomplete',
  component: AsyncAutocomplete,
  args,
};

// eslint-disable-next-line react/prop-types
const Template = ({ options, ...props }) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const fetchOptions = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(options);
      }, 1000);
    });

  return (
    <>
      <AsyncAutocomplete
        {...props}
        fetchOptions={fetchOptions}
        inputValue={inputValue}
        value={value}
        getOptionLabel={({ name }) => name}
        onChange={(event, option) => {
          setValue(option);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
      />
      <p>Value: {JSON.stringify(value)}</p>
    </>
  );
};

export const Default = Template.bind({});
