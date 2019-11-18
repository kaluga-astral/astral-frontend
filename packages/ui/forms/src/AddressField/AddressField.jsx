import PropTypes from 'prop-types';
import React from 'react';

import AsyncAutocompleteField from '../AsyncAutocompleteField';
import DaDataContext from './DaDataContext';

const validate = value => {
  if (value && !value.locality) {
    return 'Необходимо указать город или населенный пункт';
  }

  return null;
};

const getOptionLabel = item => {
  if (!item) {
    return '';
  }

  return item.label || item.unrestrictedValue;
};

const FormAddressField = props => {
  const { fetchAddressSuggestions } = React.useContext(DaDataContext);

  return (
    <AsyncAutocompleteField
      {...props}
      getOptionLabel={getOptionLabel}
      fetchOptions={fetchAddressSuggestions}
    />
  );
};

FormAddressField.defaultProps = {
  validate,
};

FormAddressField.propTypes = {
  validate: PropTypes.func,
};

export default FormAddressField;
