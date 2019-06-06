import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutMainModalContent = ({
  classes, className, children, disablePadding,
}) => (
  <div className={cn(classes.root, className, { [classes.padding]: !disablePadding })}>
    {children}
  </div>
);

DashboardLayoutMainModalContent.defaultProps = {
  className: null,
  disablePadding: false,
};

DashboardLayoutMainModalContent.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disablePadding: PropTypes.bool,
};

export default withStyles({
  root: {
    flexGrow: 1,
    overflow: 'auto',
  },
  padding: {
    padding: '0 20px',
  },
})(DashboardLayoutMainModalContent);
