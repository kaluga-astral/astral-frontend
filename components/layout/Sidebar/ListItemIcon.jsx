import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { ListItemIcon } from '../../List';

const SidebarMenuItemIcon = props => <ListItemIcon {...props} />;

export default withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
  },
}))(SidebarMenuItemIcon);
