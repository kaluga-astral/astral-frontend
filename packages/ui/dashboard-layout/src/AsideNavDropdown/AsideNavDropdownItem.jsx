import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonBase, SvgIcon } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      justifyContent: 'left',
    },
    icon: {
      flexShrink: 0,
      margin: theme.spacing(3, 4),
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
    <ButtonBase
      {...props}
      className={cn(classes.root, className)}
      component={NavLink}
      activeClassName={classes.active}
    >
      <SvgIcon className={classes.icon}>
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </SvgIcon>
      <div className={classes.text}>{text}</div>
    </ButtonBase>
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
