import PropTypes from 'prop-types';
import React from 'react';

import AsyncAutocompleteField from '../AsyncAutocompleteField';
import DaDataContext from './DaDataContext';

const itemToString = (item) => {
  if (!item) {
    return '';
  }

  return item.label;
};

const FormAddressField = ({ ...props }) => {
  const { fetchAddressSuggestions } = React.useContext(DaDataContext);

  return (
    <AsyncAutocompleteField
      {...props}
      fetchSuggestions={fetchAddressSuggestions}
      itemToString={itemToString}
    />
  );
};

FormAddressField.defaultProps = {
  validate: (value) => {
    if (value && !value.locality) {
      return 'Необходимо указать город или населенный пункт';
    }

    return null;
  },
};

FormAddressField.propTypes = {
  validate: PropTypes.func,
};

export default FormAddressField;
