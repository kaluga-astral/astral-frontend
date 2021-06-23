import React, { useState } from 'react';

import RadioGroupField from './RadioGroupField';

const args = {
  groupLabel: 'Пол',
  options: [
    { label: 'Мужской', value: 'male' },
    { label: 'Женский', value: 'female' },
  ],
  row: true,
};

const Template = props => {
  const [value, setValue] = useState();

  return (
    <>
      <RadioGroupField
        {...props}
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
      />
      <p>Value: {value}</p>
    </>
  );
};

export default {
  title: 'components/RadioGroupField',
  component: Template,
  args,
};

export const Default = Template.bind({});
