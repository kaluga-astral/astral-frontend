import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const FormGrid = ({
  classes, className, component: Component, onSubmit, children, ...props
}) => (
  <Component onSubmit={onSubmit} className={cn(classes.root, className)} {...props}>
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
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {},
})(FormGrid);
