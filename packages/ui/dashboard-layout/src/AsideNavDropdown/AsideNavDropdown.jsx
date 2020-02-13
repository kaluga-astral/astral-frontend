import nanoid from 'nanoid';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter, matchPath } from 'react-router-dom';
import { Collapse, List } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import AsideNavItem from '../AsideNavItem';
import AsideNavDropdownToggler from './AsideNavDropdownToggler';
import AsideNavDropdownContext from './AsideNavDropdownContext';

const useStyles = makeStyles(
  theme => ({
    root: {},
    list: {
      padding: `0 0 ${theme.spacing(4)}px 0`,
      listStyle: 'none',
      backgroundColor: theme.palette.primary.light,
      borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
    },
    icon: {
      width: '24px',
      height: '24px',
      fontSize: theme.typography.pxToRem(20),
    },
    text: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  {
    name: 'DashboardLayoutAsideNavDropdown',
  },
);

const DashboardLayoutAsideNavDropdown = ({
  className,
  Icon,
  text,
  children,
  location,
  counterValue,
}) => {
  const classes = useStyles();
  const id = React.useMemo(() => nanoid(), []);
  const [expanded, setExpanded] = React.useState(false);
  const { expandedNavDropdownId, setExpandedNavDropdownId } = React.useContext(
    AsideNavDropdownContext,
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
    // prettier-ignore
    const expandedByRouterReason = React.Children.toArray(children)
      .some(child => Boolean(matchPath(location.pathname, child.props.to)));
    if (expandedByRouterReason) {
      setExpandedNavDropdownId(id);
    } else if (expanded) {
      setExpandedNavDropdownId(null);
    }
  }, [location.pathname]);
  React.useEffect(() => {
    setExpanded(id === expandedNavDropdownId);
  }, [expandedNavDropdownId]);

  return (
    <li className={cn(classes.root, className)}>
      <AsideNavItem
        tooltipText={text}
        expanded={expanded}
        counterValue={counterValue}
        Icon={iconProps => (
          <Icon className={cn(classes.icon, iconProps.className)} />
        )}
        Text={textProps => (
          <div className={cn(classes.text, textProps.className)}>{text}</div>
        )}
        component={AsideNavDropdownToggler}
        onToggle={handleSidebarNavItemToggle}
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

DashboardLayoutAsideNavDropdown.defaultProps = {
  className: null,
  counterValue: null,
};

DashboardLayoutAsideNavDropdown.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  counterValue: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(DashboardLayoutAsideNavDropdown);
