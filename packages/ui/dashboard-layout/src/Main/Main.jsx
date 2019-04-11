import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutMain = React.forwardRef(({ classes, className, children }, ref) => (
  <main ref={ref} className={cn(classes.root, className)}>
    {children}
  </main>
));

DashboardLayoutMain.defaultProps = {
  className: null,
};

DashboardLayoutMain.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  () => ({
    root: {
      position: 'relative',
      flexGrow: 1,
      overflowY: 'scroll',
    },
  }),
  { name: 'DashboardLayoutMain' },
)(DashboardLayoutMain);
