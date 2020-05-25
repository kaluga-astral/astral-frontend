import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'relative',
      flexGrow: 1,
      overflow: 'hidden',
      margin: theme.spacing(4),
    },
  }),
  { name: 'DashboardLayoutMain' },
);

const DashboardLayoutMain = ({ className, children, ...props }) => {
  const classes = useStyles();

  return (
    <Box {...props} component="main" className={cn(classes.root, className)}>
      {children}
    </Box>
  );
};

DashboardLayoutMain.defaultProps = {
  className: null,
};

DashboardLayoutMain.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutMain;
