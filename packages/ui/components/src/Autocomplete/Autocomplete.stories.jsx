import React, { useState } from 'react';

import Autocomplete from './Autocomplete';

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
  title: 'components/Autocomplete',
  component: Autocomplete,
  args,
};

const Template = props => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Autocomplete
        {...props}
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
