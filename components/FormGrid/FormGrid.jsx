import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const FormGrid = ({
  className, component: Component, onSubmit, children, ...props
}) => (
  <Component onSubmit={onSubmit} className={cn('form', className)} {...props}>
    {children}
  </Component>
);

FormGrid.defaultProps = {
  className: null,
};

FormGrid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormGrid;
