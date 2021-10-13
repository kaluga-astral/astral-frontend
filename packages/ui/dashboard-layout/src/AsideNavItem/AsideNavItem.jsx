import nanoid from 'nanoid';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import {
  ButtonBase,
  Collapse,
  List,
  SvgIcon,
} from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import { __Context as AsideContext } from '../Aside';
import { __Context as SidebarContext } from '../Sidebar';
import SidebarTooltip from '../SidebarTooltip';
import SidebarCounter from '../SidebarCounter';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.gray[600],
      marginBottom: theme.spacing(1),
    },
    expandedDropdown: {
      backgroundColor: theme.palette.primary.light,
    },
    alwaysExpandedButton: {
      pointerEvents: 'none',
    },
    button: {
      display: 'flex',
      justifyContent: 'left',
      borderRadius: theme.shape.borderRadius,
      width: '100%',
    },
    icon: {
      color: theme.palette.gray[500],
      flexShrink: 0,
      margin: theme.spacing(3, 4),
    },
    text: {
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      textAlign: 'left',
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      opacity: ({ expandedSidebar }) => (expandedSidebar ? 1 : 0),
      pointerEvents: ({ expandedSidebar }) =>
        expandedSidebar ? 'auto' : 'none',
      transition: theme.transitions.create('opacity', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    expandedIcon: {
      margin: theme.spacing(3, 4),
      transform: ({ expandedDropdown }) => {
        return expandedDropdown ? 'rotateZ(180deg)' : ' rotateZ(0deg)';
      },
      opacity: ({ expandedSidebar }) => (expandedSidebar ? 1 : 0),
      pointerEvents: ({ expandedSidebar }) =>
        expandedSidebar ? 'auto' : 'none',
      transition: theme.transitions.create(['transform', 'opacity'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    expandedCounter: {
      backgroundColor: theme.palette.error.light,
    },
  }),
  {
    name: 'DashboardLayoutAsideNavItem',
  },
);

const DashboardLayoutAsideNavItem = ({
  className,
  text,
  Icon,
  counterValue,
  children,
  additionalExpandedPath,
  alwaysExpandedDropdown,
  ...props
}) => {
  const location = useLocation();
  const { expandedNavDropdownId, setExpandedNavDropdownId } = React.useContext(
    AsideContext,
  );
  const { expanded: expandedSidebar } = React.useContext(SidebarContext);
  const id = React.useMemo(() => {
    return nanoid();
  }, []);
  const expandedDropdown = React.useMemo(() => {
    return id === expandedNavDropdownId;
  }, [expandedNavDropdownId]);
  const classes = useStyles({ expandedDropdown, expandedSidebar });
  const handleSidebarNavItemClick = () => {
    if (alwaysExpandedDropdown) {
      return null;
    }
    if (expandedDropdown) {
      setExpandedNavDropdownId(null);
    } else {
      setExpandedNavDropdownId(id);
    }
  };

  React.useEffect(() => {
    const expandedByRouterReason = React.Children.toArray(children).some(
      child => {
        return Boolean(matchPath(location.pathname, child.props.to));
      },
    );

    if (expandedByRouterReason) {
      setExpandedNavDropdownId(id);
    } else if (expandedDropdown) {
      setExpandedNavDropdownId(null);
    }
  }, [location.pathname]);

  React.useEffect(() => {
    if (additionalExpandedPath) {
      const expandedByPath = additionalExpandedPath.some(path =>
        location.pathname.includes(path),
      );
      if (expandedByPath) {
        setExpandedNavDropdownId(id);
      }
    }
  }, [additionalExpandedPath, location.pathname]);

  return (
    <li
      className={cn(className, classes.root, {
        [classes.expandedDropdown]: expandedDropdown || alwaysExpandedDropdown,
      })}
    >
      <SidebarTooltip counterValue={counterValue} title={text}>
        <ButtonBase
          {...props}
          className={cn(classes.button, {
            [classes.alwaysExpandedButton]: alwaysExpandedDropdown,
          })}
          onClick={handleSidebarNavItemClick}
        >
          <Icon className={classes.icon} />
          <div className={classes.text}>{text}</div>
          {expandedSidebar && Boolean(counterValue) && (
            <SidebarCounter
              className={{
                [classes.expandedCounter]: expandedDropdown,
              }}
              counterValue={counterValue}
            />
          )}
          {children && !alwaysExpandedDropdown && (
            <SvgIcon className={classes.expandedIcon}>
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              <path d="M0 0h24v24H0V0z" fill="none" />
            </SvgIcon>
          )}
        </ButtonBase>
      </SidebarTooltip>
      {children && (
        <Collapse
          unmountOnExit
          in={expandedDropdown || alwaysExpandedDropdown}
          component={List}
        >
          {children}
        </Collapse>
      )}
    </li>
  );
};

DashboardLayoutAsideNavItem.defaultProps = {
  className: null,
  counterValue: 0,
  children: null,
  additionalExpandedPath: null,
  alwaysExpandedDropdown: false,
};

DashboardLayoutAsideNavItem.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  counterValue: PropTypes.number,
  children: PropTypes.node,
  additionalExpandedPath: PropTypes.arrayOf(PropTypes.string),
  alwaysExpandedDropdown: PropTypes.bool,
};

export default DashboardLayoutAsideNavItem;
