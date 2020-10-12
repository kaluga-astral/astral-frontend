import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

import { NavBarSelectedItems } from './NavBarSelectedItems';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      height: '100%',
      padding: theme.spacing(3, 3, 3, 2),
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,
      overflow: 'hidden',
    },
  }),
  { name: 'DashboardLayoutNavBar' },
);

export const NavBarContext = React.createContext();

export const DashboardLayoutNavBar = ({
  children,
  component: Component,
  selectedItemsLength,
  onSelectedItemsClear,
}) => {
  const classes = useStyles();

  return (
    <NavBarContext.Provider value={{ selectedItemsLength }}>
      <Component className={classes.root}>
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
  component: 'div',
};

DashboardLayoutNavBar.propTypes = {
  children: PropTypes.node.isRequired,
  selectedItemsLength: PropTypes.number,
  onSelectedItemsClear: PropTypes.func,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape(),
  ]),
};

export default DashboardLayoutNavBar;
