import React from 'react';

import AsyncAutocompleteField from '../AsyncAutocompleteField';
import DaDataContext from '../DaDataContext';

const FormBankField = props => {
  const { fetchBankSuggestions } = React.useContext(DaDataContext);

  return (
    <AsyncAutocompleteField {...props} fetchOptions={fetchBankSuggestions} />
  );
};

export default FormBankField;
