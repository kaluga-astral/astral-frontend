import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Paper } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutMainPaper = ({
  classes, className, children, ...props
}) => (
  <Paper elevation={0} className={cn(classes.root, className)} {...props}>
    {children}
  </Paper>
);

DashboardLayoutMainPaper.defaultProps = {
  className: null,
};

DashboardLayoutMainPaper.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  () => ({
    root: {
      flexGrow: 1,
      margin: '15px',
    },
  }),
  { name: 'DashboardLayoutMainPaper' },
)(DashboardLayoutMainPaper);
