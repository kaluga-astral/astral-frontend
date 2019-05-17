import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { List } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

import DropdownContext from '../SidebarNavDropdown/DropdownContext';

const DashboardLayoutSidebarNav = ({ classes, className, children }) => {
  const [expandedItemId, setExpandedItemId] = useState(null);

  const setExpanded = (id) => {
    if (id === expandedItemId) {
      setExpandedItemId(null);
    } else {
      setExpandedItemId(id);
    }
  };

  return (
    <DropdownContext.Provider value={{ expandedItemId, onNavDropdownItemSelect: setExpanded }}>
      <nav className={cn(classes.root, className)}>
        <List className={classes.list}>{children}</List>
      </nav>
    </DropdownContext.Provider>
  );
};

DashboardLayoutSidebarNav.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNav.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  () => ({
    root: {
      flexGrow: 1,
      padding: 0,
      // overflowY: 'scroll',
      // '::-webkit-scrollbar': {
      //   display: 'none',
      // },
      overflow: 'hidden',
      // overflowY: 'scroll',
      // scrollbarWidth: 'none',
      // msOverflowStyle: 'none',
    },
    //   root::webkitScrollbar: {
    //   width: 0,
    //   height: 0,
    // },
    list: {},
  }),
  { name: 'DashboardLayoutSidebarNav' },
)(DashboardLayoutSidebarNav);
