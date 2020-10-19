import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ButtonBase, SvgIcon } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import SidebarTooltip from '../SidebarTooltip';
import SidebarCounter from '../SidebarCounter';

const useStyles = makeStyles(
  theme => ({
    root: {
      justifyContent: 'left',
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
      marginRight: theme.spacing(14),
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
  }),
  {
    name: 'DashboardLayoutAsideNavDropdownItem',
  },
);

const DashboardLayoutAsideNavDropdownItem = ({
  className,
  text,
  counterValue,
  expanded,
  ...props
}) => {
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
          {expanded && <SidebarCounter counterValue={counterValue} />}
        </div>
      </ButtonBase>
    </SidebarTooltip>
  );
};

DashboardLayoutAsideNavDropdownItem.defaultProps = {
  className: null,
  expanded: true,
  counterValue: null,
};

DashboardLayoutAsideNavDropdownItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  counterValue: PropTypes.number,
};

export default DashboardLayoutAsideNavDropdownItem;
