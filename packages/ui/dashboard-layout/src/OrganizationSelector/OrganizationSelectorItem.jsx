import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { MenuItem } from '@astral-frontend/components';
import { OrganizationIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  icon: {
    color: theme.palette.primary.main,
    marginRight: '15px',
  },
  name: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const DashboardLayoutOrganizationSelectorItem = ({
  className,
  name,
  ...props
}) => {
  const classes = useStyles();

  return (
    <MenuItem className={cn(classes.root, className)} {...props}>
      <OrganizationIcon className={classes.icon} />
      <div className={classes.name}>{name}</div>
    </MenuItem>
  );
};

DashboardLayoutOrganizationSelectorItem.defaultProps = {
  className: null,
};

DashboardLayoutOrganizationSelectorItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default DashboardLayoutOrganizationSelectorItem;
