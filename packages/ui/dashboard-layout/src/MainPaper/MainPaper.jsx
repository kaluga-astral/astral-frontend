import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Paper } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutMainPaper = ({
  classes, className, children, disablePadding, ...props
}) => (
  <Paper
    elevation={0}
    className={cn(classes.root, className, { [classes.padding]: !disablePadding })}
    {...props}
  >
    {children}
  </Paper>
);

DashboardLayoutMainPaper.defaultProps = {
  className: null,
  disablePadding: false,
};

DashboardLayoutMainPaper.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disablePadding: PropTypes.bool,
};

export default withStyles(
  () => ({
    root: {
      flexGrow: 1,
      margin: '15px',
      overflowY: 'auto',
    },
    padding: {
      padding: '15px',
    },
  }),
  { name: 'DashboardLayoutMainPaper' },
)(DashboardLayoutMainPaper);
