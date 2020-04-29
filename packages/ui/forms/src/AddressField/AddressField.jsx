import React from 'react';

import AsyncAutocompleteField from '../AsyncAutocompleteField';
import DaDataContext from '../DaDataContext/DaDataContext';

const FormAddressField = props => {
  const { fetchAddressSuggestions } = React.useContext(DaDataContext);

  console.log('FormAddressField', props.value);

  return (
    <AsyncAutocompleteField {...props} fetchOptions={fetchAddressSuggestions} />
  );
};

export default FormAddressField;
