import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const FormGridRow = ({ className, children, ...props }) => (
  <div {...props} className={cn('form__row', className)}>
    {children}
  </div>
);

FormGridRow.defaultProps = {
  className: null,
};

FormGridRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormGridRow;
