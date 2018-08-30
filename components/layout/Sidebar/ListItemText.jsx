import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { ListItemText } from '../../List';

const SidebarListItemText = props => <ListItemText disableTypography {...props} />;

export default withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
  },
}))(SidebarListItemText);
