import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { MenuItem } from '@astral-frontend/components';
import { OrganizationIcon } from '@astral-frontend/icons';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutOrganizationSelectorItem = ({
  classes, className, name, ...props
}) => (
  <MenuItem className={cn(classes.root, className)} {...props}>
    <OrganizationIcon className={classes.icon} />
    <div className={classes.name}>{name}</div>
  </MenuItem>
);

DashboardLayoutOrganizationSelectorItem.defaultProps = {
  className: null,
};

DashboardLayoutOrganizationSelectorItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default withStyles(theme => ({
  root: {},
  icon: {
    color: theme.palette.primary.main,
  },
  name: {},
}))(DashboardLayoutOrganizationSelectorItem);
