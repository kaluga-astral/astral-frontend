import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const HomeLayoutNav = props => <MenuList component="nav" {...props} />;

export default withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    padding: 0,
  },
})(HomeLayoutNav);
