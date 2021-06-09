import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';
import { Box } from '@astral/components';

import SidebarContext from './SidebarContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      width: '70px',
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      userSelect: 'none',
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    expanded: {
      width: '260px',
    },
  }),
  { name: 'DashboardLayoutSidebar' },
);

const DashboardLayoutSidebar = ({ className, children }) => {
  const classes = useStyles();
  const { expanded } = React.useContext(SidebarContext);

  return (
    <Box
      className={cn(className, classes.root, {
        [classes.expanded]: expanded,
      })}
    >
      {children}
    </Box>
  );
};

DashboardLayoutSidebar.defaultProps = {
  className: null,
};

DashboardLayoutSidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutSidebar;
