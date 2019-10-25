import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      width: '260px',
      height: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
  { name: 'DashboardLayoutSidebar' },
);

const DashboardLayoutSidebar = ({ className, children }) => {
  const classes = useStyles();

  return <aside className={cn(classes.root, className)}>{children}</aside>;
};

DashboardLayoutSidebar.defaultProps = {
  className: null,
};

DashboardLayoutSidebar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutSidebar;
