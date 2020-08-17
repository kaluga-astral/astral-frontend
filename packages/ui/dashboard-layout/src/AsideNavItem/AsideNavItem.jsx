import nanoid from 'nanoid';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useLocation, matchPath } from 'react-router-dom';

import {
  ButtonBase,
  SvgIcon,
  Collapse,
  List,
} from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import { __Context as AsideContext } from '../Aside';
import SidebarTooltip from '../SidebarTooltip';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.gray[600],
      marginBottom: theme.spacing(1),
    },
    expanded: {
      backgroundColor: theme.palette.primary.light,
    },
    button: {
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
    },
    counter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.common.white,
      flexShrink: 0,
      marginRight: `${theme.spacing(1)}px`,
      width: '20px',
      height: '20px',
      fontSize: '75%',
      fontWeight: 'bold',
      borderRadius: '50%',
      backgroundColor: theme.palette.error.main,
    },
    expanderIcon: {
      margin: theme.spacing(3, 4),
    },
    activeButton: {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      '& $icon': {
        color: theme.palette.primary.main,
      },
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
  ...props
}) => {
  const location = useLocation();
  const { expandedNavDropdownId, setExpandedNavDropdownId } = React.useContext(
    AsideContext,
  );
  const id = React.useMemo(() => {
    return nanoid();
  }, []);
  const expanded = React.useMemo(() => {
    return id === expandedNavDropdownId;
  }, [expandedNavDropdownId]);
  const classes = useStyles({ expanded });
  const handleSidebarNavItemClick = () => {
    if (expanded) {
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
    } else if (expanded) {
      setExpandedNavDropdownId(null);
    }
  }, [location.pathname]);

  return (
    <li
      className={cn(className, classes.root, { [classes.expanded]: expanded })}
    >
      <SidebarTooltip title={text}>
        <ButtonBase
          {...props}
          className={classes.button}
          onClick={handleSidebarNavItemClick}
        >
          <Icon className={classes.icon} />
          <div className={classes.text}>{text}</div>
          {counterValue && (
            <div className={classes.counter}>{counterValue}</div>
          )}
          {children && (
            <SvgIcon className={classes.expanderIcon}>
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              <path d="M0 0h24v24H0V0z" fill="none" />
            </SvgIcon>
          )}
        </ButtonBase>
      </SidebarTooltip>
      {children && (
        <Collapse unmountOnExit in={expanded} component={List}>
          {children}
        </Collapse>
      )}
    </li>
  );
};

DashboardLayoutAsideNavItem.defaultProps = {
  className: null,
  counterValue: null,
  children: null,
};

DashboardLayoutAsideNavItem.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  counterValue: PropTypes.number,
  children: PropTypes.node,
};

export default DashboardLayoutAsideNavItem;
