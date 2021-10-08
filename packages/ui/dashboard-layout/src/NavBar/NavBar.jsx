import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import { NavBarSelectedItems } from './NavBarSelectedItems';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      height: '100%',
      padding: theme.spacing(3, 3, 3, 3),
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      overflow: 'hidden',
    },
  }),
  { name: 'DashboardLayoutNavBar' },
);

export const NavBarContext = React.createContext();

export const DashboardLayoutNavBar = ({
  className,
  children,
  component: Component,
  selectedItemsLength,
  onSelectedItemsClear,
  ...props
}) => {
  const classes = useStyles();

  return (
    <NavBarContext.Provider value={{ selectedItemsLength }}>
      <Component className={cn(classes.root, className)} {...props}>
        <NavBarSelectedItems
          data={{ selectedItemsLength }}
          onSelectedItemsClear={onSelectedItemsClear}
        />
        {children}
      </Component>
    </NavBarContext.Provider>
  );
};

DashboardLayoutNavBar.defaultProps = {
  selectedItemsLength: 0,
  onSelectedItemsClear: null,
  component: Box,
  className: null,
};

DashboardLayoutNavBar.propTypes = {
  children: PropTypes.node.isRequired,
  selectedItemsLength: PropTypes.number,
  onSelectedItemsClear: PropTypes.func,
  className: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape(),
  ]),
};

export default DashboardLayoutNavBar;
