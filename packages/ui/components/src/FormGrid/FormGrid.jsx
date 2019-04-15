import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const FormGrid = ({
  classes, className, component: Component, ...props
}) => (
  <Component className={cn(classes.root, className)} {...props} />
);

FormGrid.defaultProps = {
  className: null,
};

FormGrid.propTypes = {
  className: PropTypes.string,
  component: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {},
})(FormGrid);
