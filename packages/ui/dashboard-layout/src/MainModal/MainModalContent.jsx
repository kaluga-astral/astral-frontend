import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutMainModalContent = ({ classes, className, children }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

DashboardLayoutMainModalContent.defaultProps = {
  className: null,
};

DashboardLayoutMainModalContent.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    flexGrow: 1,
  },
})(DashboardLayoutMainModalContent);
