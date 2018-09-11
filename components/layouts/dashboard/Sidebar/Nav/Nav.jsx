import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const SidebarNav = props => <MenuList component="nav" {...props} />;

export default withStyles({
  root: {
    padding: 0,
    overflowY: 'scroll',
    // '&:not(:last-child)': {
    //   borderTop: '0.5px solid rgba(255, 255, 255, 0.5)',
    // },
  },
})(SidebarNav);
