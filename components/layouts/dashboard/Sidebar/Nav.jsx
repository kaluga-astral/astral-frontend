import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const SidebarNav = props => <MenuList component="nav" {...props} />;

export default withStyles({})(SidebarNav);
