import pathToRegexp from 'path-to-regexp';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Collapse, List } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

import SidebarNavItem from '../SidebarNavItem';
import SidebarNavDropdownToggler from './SidebarNavDropdownToggler';

const DashboardLayoutSidebarNavDropdown = ({
  classes,
  className,
  Icon,
  text,
  children,
  location,
}) => {
  const getCurrentExpanded = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    React.Children.toArray(children).some(
      ({ props: { to } }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        pathToRegexp(location.pathname).test(to),
      // eslint-disable-next-line function-paren-newline
    );
  const [expanded, setExpanded] = React.useState(getCurrentExpanded());
  const handleNavDropdownToggle = () => {
    setExpanded(prevState => !prevState);
  };
  React.useEffect(() => {
    setExpanded(getCurrentExpanded());
  }, [location.pathname]);

  return (
    <li className={cn(classes.root, className)}>
      <SidebarNavItem
        component={SidebarNavDropdownToggler}
        Icon={iconProps => (
          <Icon className={cn(classes.icon, iconProps.className)} />
        )}
        Text={textProps => (
          <div className={cn(classes.text, textProps.className)}>{text}</div>
        )}
        onToggle={handleNavDropdownToggle}
      />
      <Collapse
        unmountOnExit
        in={expanded}
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
