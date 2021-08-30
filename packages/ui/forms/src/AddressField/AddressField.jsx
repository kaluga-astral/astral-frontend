import React from 'react';
import { mustBeAddress } from '@astral-frontend/validations';

import AsyncAutocompleteField from '../AsyncAutocompleteField';
import DaDataContext from '../DaDataContext/DaDataContext';

const FormAddressField = props => {
  const { fetchAddressSuggestions } = React.useContext(DaDataContext);

  return (
    <AsyncAutocompleteField
      {...props}
      validate={({ value }) => mustBeAddress(value)}
      inputProps={{ maxLength: 200 }}
      fetchOptions={fetchAddressSuggestions}
    />
  );
};

export default FormAddressField;
