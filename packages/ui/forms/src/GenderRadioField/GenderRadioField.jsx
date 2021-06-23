import PropTypes from 'prop-types';
import React from 'react';

import RadioGroupField from '../RadioGroupField';

const GENDER_OPTIONS = [
  { label: 'Мужской', value: 'male' },
  { label: 'Женский', value: 'female' },
];

const GenderRadioField = ({ groupLabel = 'Пол', ...props }) => {
  return (
    <RadioGroupField
      {...props}
      groupLabel={groupLabel}
      options={GENDER_OPTIONS}
    />
  );
};

GenderRadioField.propTypes = {
  fullWidth: PropTypes.bool,
  row: PropTypes.bool,
  className: PropTypes.string,
  /** Главный label === Mui FormLabel */
  groupLabel: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default GenderRadioField;
