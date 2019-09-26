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
  component: 'form',
};

FormGrid.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string, PropTypes.func]),
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {},
})(FormGrid);
