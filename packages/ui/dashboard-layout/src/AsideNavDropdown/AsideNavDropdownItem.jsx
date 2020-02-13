import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SvgIcon } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import AsideNavItem from '../AsideNavItem';
import { __Context as AsideContext } from '../Aside';

const useStyles = makeStyles(
  theme => ({
    root: {},
    navItem: {
      borderLeft: `2px solid ${theme.palette.primary.light}`,
      marginLeft: `${theme.spacing(4)}px`,
    },
    collapsedItem: {
      padding: `${theme.spacing(5)}px 0 ${theme.spacing(5)}px ${theme.spacing(
        2,
      )}px`,
    },
    active: {
      color: theme.palette.primary.main,
      borderLeft: `2px solid ${theme.palette.primary.main}`,
    },
    icon: {
      fontSize: theme.typography.pxToRem(4),
    },
    text: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(14),
    },
  }),
  {
    name: 'DashboardLayoutAsideNavDropdownItem',
  },
);

const DashboardLayoutAsideNavDropdownItemComponent = React.forwardRef(
  (componentProps, ref) => <NavLink {...componentProps} ref={ref} />,
);

const DashboardLayoutAsideNavDropdownItem = ({ className, text, ...props }) => {
  const { isOpen } = React.useContext(AsideContext);
  const classes = useStyles();

  return (
    <li className={cn(classes.root, className)}>
      <AsideNavItem
        tooltipText={text}
        activeClassName={classes.active}
        className={cn(classes.navItem, {
          [classes.collapsedItem]: !isOpen,
        })}
        Text={textProps => (
          <div className={cn(classes.text, textProps.className)}>{text}</div>
        )}
        Icon={() =>
          !isOpen && (
            <SvgIcon viewBox="0 0 4 4" className={classes.icon}>
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </SvgIcon>
          )
        }
        component={DashboardLayoutAsideNavDropdownItemComponent}
        {...props}
      />
    </li>
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
