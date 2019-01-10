import { isEqual } from 'lodash-es';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormSpy } from 'react-final-form';

class AutoSave extends Component {
  componentDidUpdate = (prevProps) => {
    const { dirty, values, form } = this.props;
    const { values: prevValues } = prevProps;

    if (dirty && !isEqual(prevValues, values)) {
      form.submit();
    }
  };

  render = () => null;
}

AutoSave.propTypes = {
  dirty: PropTypes.bool.isRequired,
  values: PropTypes.shape({}).isRequired,
  form: PropTypes.shape({}).isRequired,
};

const FormAutoSave = () => (
  <FormSpy
    subscription={{ dirtySinceLastSubmit: true, dirty: true, values: true }}
    component={AutoSave}
  />
);

export default FormAutoSave;
