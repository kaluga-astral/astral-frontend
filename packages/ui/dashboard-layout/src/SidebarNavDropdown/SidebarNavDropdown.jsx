import nanoid from 'nanoid';
import pathToRegexp from 'path-to-regexp';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Collapse, List } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import SidebarNavItem from '../SidebarNavItem';
import SidebarNavDropdownToggler from './SidebarNavDropdownToggler';
import SidebarNavDropdownContext from './SidebarNavDropdownContext';

const useStyles = makeStyles(
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
  {
    name: 'DashboardLayoutSidebarNavDropdown',
  },
);

const DashboardLayoutSidebarNavDropdown = ({
  className, Icon, text, children, location,
}) => {
  const classes = useStyles();
  const id = React.useMemo(() => nanoid(), []);
  const [expanded, setExpanded] = React.useState(false);
  const { expandedNavDropdownId, setExpandedNavDropdownId } = React.useContext(
    SidebarNavDropdownContext,
  );
  const handleSidebarNavItemToggle = () => {
    const expandedByUserReason = expandedNavDropdownId === id;

    if (expandedByUserReason) {
      setExpandedNavDropdownId(null);
    } else {
      setExpandedNavDropdownId(id);
    }
  };

  React.useEffect(() => {
    const expandedByRouterReason = React.Children.toArray(children).some(
      child => child && pathToRegexp(location.pathname).test(child.props.to),
    );

    if (expandedByRouterReason) {
      setExpandedNavDropdownId(id);
    } else {
      setExpandedNavDropdownId(false);
    }
    setExpanded(expandedByRouterReason);
  }, [location.pathname]);
  React.useEffect(() => {
    setExpanded(id === expandedNavDropdownId);
  }, [expandedNavDropdownId]);

  return (
    <li className={cn(classes.root, className)}>
      <SidebarNavItem
        expanded={expanded}
        Icon={iconProps => <Icon className={cn(classes.icon, iconProps.className)} />}
        Text={textProps => <div className={cn(classes.text, textProps.className)}>{text}</div>}
        component={SidebarNavDropdownToggler}
        onToggle={handleSidebarNavItemToggle}
      />
      <Collapse unmountOnExit in={expanded} component={List} className={classes.list}>
        {children}
      </Collapse>
    </li>
  );
};

DashboardLayoutSidebarNavDropdown.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNavDropdown.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(DashboardLayoutSidebarNavDropdown);
