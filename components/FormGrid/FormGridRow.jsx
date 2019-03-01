import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const FormGridRow = ({
  classes, className, children, ...props
}) => (
  <div {...props} className={cn(classes.root, className)}>
    {children}
  </div>
);

FormGridRow.defaultProps = {
  className: null,
};

FormGridRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
  },
})(FormGridRow);
