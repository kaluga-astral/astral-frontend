import React from 'react';
import { mustBeAddress } from '@astral-frontend/validations';

import AsyncAutocompleteField from '../AsyncAutocompleteField';
import DaDataContext from '../DaDataContext/DaDataContext';

const FormAddressField = props => {
  const { fetchAddressSuggestions } = React.useContext(DaDataContext);
  const validate = React.useCallback(({ value }) => {
    return mustBeAddress(value);
  }, []);

  return (
    <AsyncAutocompleteField
      {...props}
      validate={validate}
      inputProps={{ maxLength: 200 }}
      fetchOptions={fetchAddressSuggestions}
    />
  );
};

export default FormAddressField;
