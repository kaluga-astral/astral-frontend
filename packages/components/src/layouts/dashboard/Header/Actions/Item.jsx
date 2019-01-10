import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HeaderActionsItem = React.forwardRef(({ classes, className, ...props }, ref) => (
  <div ref={ref} className={cn(classes.root, className)} {...props} />
));

HeaderActionsItem.defaultProps = {
  className: null,
};

HeaderActionsItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    margin: '0 12.5px',
  },
})(HeaderActionsItem);
