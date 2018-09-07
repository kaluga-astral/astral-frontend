import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import Loader from '../status/Loader';

const SubmitButton = ({
  disabled, submitting, children, ...props
}) => (
  <Button disabled={disabled || submitting} type="submit" {...props}>
    {submitting ? <Loader size={20} /> : children}
  </Button>
);

SubmitButton.defaultProps = {
  disabled: false,
  submitting: false,
  className: null,
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  submitting: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SubmitButton;
