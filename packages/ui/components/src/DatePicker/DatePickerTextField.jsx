import PropTypes from 'prop-types';
import React from 'react';

import TextField from '../TextField';

const DatePickerTextField = ({ datePickerValue, inputProps, ...props }) => {
  const [textFieldValue, setTextFieldValue] = React.useState(datePickerValue);
  const textFieldInputValue = React.useMemo(() => {
    if (textFieldValue) {
      return inputProps.value;
    }

    return '';
  }, [textFieldValue, inputProps]);

  const handleTextFieldChange = React.useCallback(event => {
    setTextFieldValue(event.target.value);
  }, []);

  React.useEffect(() => {
    if (!datePickerValue) {
      setTextFieldValue('');
    }
  }, [datePickerValue]);

  return (
    <TextField
      {...props}
      inputProps={{
        ...inputProps,
        value: textFieldInputValue,
      }}
      value={textFieldValue}
      onChange={handleTextFieldChange}
    />
  );
};

DatePickerTextField.propTypes = {
  datePickerValue: PropTypes.string,
  inputProps: PropTypes.shape({
    value: PropTypes.string,
  }),
};

export default DatePickerTextField;
