import PropTypes from 'prop-types';
import React from 'react';
import { FormSpy } from 'react-final-form';

import Button from '../Button';
import Loader from '../status/Loader';

const SubmitButton = ({
  disabled, children, ...props
}) => (
  <FormSpy subscription={{ submitting: true }}>
    {({ submitting }) => (
      <Button disabled={disabled || submitting} type="submit" {...props}>
        {submitting ? <Loader size={20} /> : children}
      </Button>
    )}
  </FormSpy>
);

SubmitButton.defaultProps = {
  disabled: false,
  className: null,
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SubmitButton;
