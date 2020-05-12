import React from 'react';
import matchSorter from 'match-sorter';

import AsyncAutocompleteField from '../AsyncAutocompleteField';
import DaDataContext from '../DaDataContext';

const FormBankField = props => {
  const { fetchBankSuggestions } = React.useContext(DaDataContext);

  return (
    <AsyncAutocompleteField
      {...props}
      fetchOptions={fetchBankSuggestions}
      filterOptions={(options, { inputValue }) => {
        return matchSorter(options, inputValue, {
          keys: ['label', 'value.bic', 'value.swift', 'value.inn'],
        });
      }}
    />
  );
};

export default FormBankField;
