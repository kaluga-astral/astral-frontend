import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const FormGridField = ({ className, component: Component, ...props }) => (
  <Component className={cn('form__field', className)} {...props} />
);

FormGridField.defaultProps = {
  className: null,
};

FormGridField.propTypes = {
  className: PropTypes.string,
  component: PropTypes.func.isRequired,
};

export default FormGridField;
