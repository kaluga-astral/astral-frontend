import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'react-final-form';

const HiddenField = ({ name }) => (
  <Field name={name}>{({ input }) => <input {...input} type="hidden" />}</Field>
);

HiddenField.defaultProps = {};

HiddenField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HiddenField;
