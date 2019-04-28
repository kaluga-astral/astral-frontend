/* eslint-disable react/prop-types */
import cn from 'classnames';
import React from 'react';
import { MenuItem } from '@astral-frontend/components';
import { OrganizationIcon } from '@astral-frontend/icons';
import { withStyles } from '@astral-frontend/styles';

// FIXME: описать PropTypes и удалить eslint-disable react/prop-types
const DashboardLayoutOrganizationSelectorItem = ({ classes, className, name }) => (
  <MenuItem className={cn(classes.root, className)}>
    <OrganizationIcon className={classes.icon} />
    <div className={classes.name}>{name}</div>
  </MenuItem>
);

export default withStyles({
  root: {
  },
  avatar: {
  },
  icon: {
    color: '#6746EB',
  },
})(DashboardLayoutOrganizationSelectorItem);
