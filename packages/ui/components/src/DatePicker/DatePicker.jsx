import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker as MuiDatePicker } from '@mui/lab';
import {
  DEFAULT_DATE_MASK,
  DEFAULT_INVALID_DATE_MESSAGE,
  DEFAULT_MAX_DATE,
  DEFAULT_MIN_DATE,
  DEFAULT_VIEW_DATE_FORMAT,
} from '@astral-frontend/constants';
import { formatISO, isValid } from 'date-fns';

import DatePickersUtilsProvider from './DatePickerUtilsProvider';
import DatePickerTextField from './DatePickerTextField';

const DatePicker = ({
  minDate = DEFAULT_MIN_DATE,
  maxDate = DEFAULT_MAX_DATE,
  viewFormat = DEFAULT_VIEW_DATE_FORMAT,
  mask = DEFAULT_DATE_MASK,
  onChange,
  value,
  error,
  helperText,
  ...props
}) => {
  const helperTextMessage = React.useMemo(() => {
    if (error) {
      return helperText || DEFAULT_INVALID_DATE_MESSAGE;
    }

    return helperText;
  }, [error, helperText]);

  const handleDatePickerChange = React.useCallback(
    date => {
      if (isValid(date)) {
        onChange(formatISO(date, { representation: 'date' }));

        return;
      }

      onChange(String(date));
    },
    [onChange],
  );

  return (
    <DatePickersUtilsProvider>
      <MuiDatePicker
        {...props}
        minDate={minDate}
        maxDate={maxDate}
        inputFormat={viewFormat}
        mask={mask}
        value={value}
        onChange={handleDatePickerChange}
        renderInput={renderProps => (
          <DatePickerTextField
            {...props}
            {...renderProps}
            datePickerValue={value}
            error={error}
            helperText={helperTextMessage}
          />
        )}
      />
    </DatePickersUtilsProvider>
  );
};

DatePicker.propTypes = {
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  value: PropTypes.string,
  viewFormat: PropTypes.string,
  mask: PropTypes.string,
  invalidDateMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  renderInput: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default DatePicker;
