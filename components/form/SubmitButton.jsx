import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import Loader from '../status/Loader';

const SubmitButton = ({
  disabled, submitting, children, ...rest
}) => (
  <Button disabled={disabled || submitting} type="submit" color="primary" {...rest}>
    <span>{children}</span>
    {submitting && <Loader size={20} style={{ marginLeft: '10px' }} />}
  </Button>
);

SubmitButton.defaultProps = {
  disabled: false,
  submitting: false,
  fullWidth: false,
  margin: 'normal',
  className: null,
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  submitting: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SubmitButton;
