import { uniqueId } from 'lodash-es';
import pathToRegexp from 'path-to-regexp';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Collapse, List } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

import SidebarNavDropdownItem from './SidebarNavDropdownItem';
import SidebarNavDropdownToggler from './SidebarNavDropdownToggler';
import DropdownContext from './DropdownContext';

const DashboardLayoutSidebarNavDropdown = ({
  classes,
  className,
  Icon,
  text,
  children,
  location,
}) => {
  const [id, setId] = useState(null);
  const dropdownContext = useContext(DropdownContext);
  useEffect(() => {
    const { onNavDropdownItemSelect } = dropdownContext;
    const itemId = uniqueId();
    setId(itemId);
    if (
      React.Children.toArray(children).some(
        child => child && pathToRegexp(location.pathname).test(child.props.to),
      )
    ) {
      onNavDropdownItemSelect(itemId);
    }
  }, []);

  return (
    <li className={cn(classes.root, className)}>
      <SidebarNavDropdownItem
        component={SidebarNavDropdownToggler}
        Icon={iconProps => <Icon className={cn(classes.icon, iconProps.className)} />}
        Text={textProps => <div className={cn(classes.text, textProps.className)}>{text}</div>}
        onToggle={() => dropdownContext.onNavDropdownItemSelect(id)}
        expanded={id === dropdownContext.expandedItemId}
      />
      <Collapse
        unmountOnExit
        in={id === dropdownContext.expandedItemId}
        component={List}
        className={classes.list}
      >
        {children}
      </Collapse>
    </li>
  );
};

DashboardLayoutSidebarNavDropdown.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNavDropdown.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(
  theme => ({
    root: {},
    list: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
    },
    icon: {
      fontSize: '20px',
    },
    text: {
      fontSize: '16px',
      fontWeight: theme.typography.fontWeightMedium,
    },
  }),
  { name: 'DashboardLayoutSidebarNavDropdown' },
)(withRouter(DashboardLayoutSidebarNavDropdown));
