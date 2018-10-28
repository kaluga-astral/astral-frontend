import PropTypes from 'prop-types';
import React from 'react';
import InlineDatePicker from 'material-ui-pickers/DatePicker/DatePickerInline';

import Field from '../Field';
import SvgIcon from '../../../SvgIcon';

const LeftArrowIcon = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </SvgIcon>
);

const RightArrowIcon = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </SvgIcon>
);

const DateField = ({ label, ...props }) => (
  <Field {...props} format={value => (value ? new Date(value) : null)}>
    {({ input }) => (
      <InlineDatePicker
        format="dd.MM.yyyy"
        leftArrowIcon={<LeftArrowIcon />}
        rightArrowIcon={<RightArrowIcon />}
        label={label}
        {...input}
      />
    )}
  </Field>
);

DateField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default DateField;
