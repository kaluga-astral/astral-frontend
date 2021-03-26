import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonBase, SvgIcon } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import SidebarTooltip from '../SidebarTooltip';
import SidebarCounter from '../SidebarCounter';
import { __Context as SidebarContext } from '../Sidebar';

const useStyles = makeStyles(
  theme => ({
    root: {
      justifyContent: 'left',
      marginRight: theme.spacing(5),
    },
    icon: {
      height: '48px',
      width: '28px',
      flexShrink: 0,
      margin: theme.spacing(0, 2, 0, 5),
    },
    collapsedIcon: {
      opacity: ({ expanded }) => (expanded ? 0 : 1),
      pointerEvents: ({ expanded }) => (expanded ? 'auto' : 'none'),
      transition: theme.transitions.create('opacity', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    text: {
      display: 'flex',
      justifyContent: 'space-between',
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
      opacity: ({ expanded }) => (expanded ? 1 : 0),
      pointerEvents: ({ expanded }) => (expanded ? 'auto' : 'none'),
      transition: theme.transitions.create('opacity', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    active: {
      color: theme.palette.primary.main,
    },
    sidebarCounter: {
      marginRight: theme.spacing(9),
    },
  }),
  {
    name: 'DashboardLayoutAsideNavDropdownItem',
  },
);

const DashboardLayoutAsideNavDropdownItem = ({
  className,
  text,
  counterValue,
  ...props
}) => {
  const { expanded } = React.useContext(SidebarContext);
  const classes = useStyles({ expanded });

  return (
    <SidebarTooltip counterValue={counterValue} title={text}>
      <ButtonBase
        {...props}
        className={cn(classes.root, className)}
        component={NavLink}
        activeClassName={classes.active}
      >
        <SvgIcon viewBox="0 0 28 48" className={classes.icon}>
          <rect width="2" height="48" fill="currentColor" />
          {!expanded && (
            <circle
              className={classes.collapsedIcon}
              cx="16"
              cy="24"
              r="2"
              fill="currentColor"
            />
          )}
        </SvgIcon>
        <div className={classes.text}>
          {text}
          {expanded && Boolean(counterValue) && (
            <SidebarCounter
              counterValue={counterValue}
              className={classes.sidebarCounter}
            />
          )}
        </div>
      </ButtonBase>
    </SidebarTooltip>
  );
};

DashboardLayoutAsideNavDropdownItem.defaultProps = {
  className: null,
  counterValue: 0,
};

DashboardLayoutAsideNavDropdownItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  counterValue: PropTypes.number,
};

export default DashboardLayoutAsideNavDropdownItem;
