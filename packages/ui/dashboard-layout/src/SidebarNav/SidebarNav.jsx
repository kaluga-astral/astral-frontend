import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { List } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import DropdownContext from '../SidebarNavDropdown/SidebarNavDropdownContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1,
      padding: 0,
      overflowY: 'scroll',
      scrollbarWidth: 'none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    list: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  }),
  {
    name: 'DashboardLayoutSidebarNav',
  },
);

const DashboardLayoutSidebarNav = ({ className, children, ...props }) => {
  const classes = useStyles();
  const [expandedNavDropdownId, setExpandedNavDropdownId] = useState(null);

  return (
    <DropdownContext.Provider
      value={{ expandedNavDropdownId, setExpandedNavDropdownId }}
    >
      <nav className={cn(classes.root, className)} {...props}>
        <List className={classes.list}>{children}</List>
      </nav>
    </DropdownContext.Provider>
  );
};

DashboardLayoutSidebarNav.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutSidebarNav;
