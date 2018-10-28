import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import Badge from './Badge';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';

const SidebarNavLink = ({
  classes, icon: Icon, text, badgeContent, ...props
}) => (
  <MenuItem component={NavLink} activeClassName={classes.selected} classes={classes} {...props}>
    {Icon && (
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
    )}
    <ListItemText>{text}</ListItemText>
    {Boolean(badgeContent) && <Badge>{badgeContent}</Badge>}
  </MenuItem>
);

SidebarNavLink.defaultProps = {
  icon: null,
  badgeContent: null,
};

SidebarNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.func,
  text: PropTypes.string.isRequired,
  badgeContent: PropTypes.node,
  classes: PropTypes.shape({
    selected: PropTypes.string,
  }).isRequired,
};

export default withStyles(theme => ({
  root: {
    padding: '10px 20px',
    fontSize: '14px',
    color: theme.palette.common.white,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  selected: {
    background: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
}))(SidebarNavLink);
