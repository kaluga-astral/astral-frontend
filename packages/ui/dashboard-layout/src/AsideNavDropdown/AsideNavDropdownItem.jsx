import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ButtonBase, SvgIcon } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import SidebarTooltip from '../SidebarTooltip';

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
    text: {
      marginRight: theme.spacing(4),
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightBold,
    },
    active: {
      color: theme.palette.primary.main,
    },
  }),
  {
    name: 'DashboardLayoutAsideNavDropdownItem',
  },
);

const DashboardLayoutAsideNavDropdownItem = ({ className, text, ...props }) => {
  const classes = useStyles();

  return (
    <SidebarTooltip title={text}>
      <ButtonBase
        {...props}
        className={cn(classes.root, className)}
        component={NavLink}
        activeClassName={classes.active}
      >
        <SvgIcon viewBox="0 0 28 48" className={classes.icon}>
          <rect width="2" height="48" fill="currentColor" />
          <circle cx="16" cy="24" r="2" fill="currentColor" />
        </SvgIcon>
        <div className={classes.text}>{text}</div>
      </ButtonBase>
    </SidebarTooltip>
  );
};

DashboardLayoutAsideNavDropdownItem.defaultProps = {
  className: null,
};

DashboardLayoutAsideNavDropdownItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default DashboardLayoutAsideNavDropdownItem;
