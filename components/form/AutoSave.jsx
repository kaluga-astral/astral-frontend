import { isEqual } from 'lodash-es';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormSpy } from 'react-final-form';

class AutoSave extends Component {
  componentDidUpdate = (prevProps) => {
    const {
      values,
      form: { submit },
      onSubmit,
    } = this.props;
    const { values: prevValues } = prevProps;

    if (!isEqual(prevValues, values)) {
      onSubmit(submit(values));
    }
  };

  render = () => null;
}

AutoSave.propTypes = {
  values: PropTypes.shape().isRequired,
  form: PropTypes.shape({
    submit: PropTypes.func.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const FormAutoSave = ({ onChange, ...props }) => (
  <FormSpy {...props} subscription={{ values: true }} component={AutoSave} />
);

export default FormAutoSave;
