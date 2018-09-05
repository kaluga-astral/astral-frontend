import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import NavLink from '../../../NavLink';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';
import Badge from './Badge';

const SidebarNavLink = ({
  classes, to, icon: Icon, text, badgeContent,
}) => (
  <MenuItem to={to} component={NavLink} activeClassName={classes.selected} classes={classes}>
    {Icon && (
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
    )}
    <ListItemText primary={text} />
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

export default withStyles({
  root: {
    padding: '15px 25px',
    fontSize: '20px',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  selected: {
    background: '#008bec', // FIXME: цвет в константы
    '&:hover': {
      background: '#008bec', // FIXME: цвет в константы
    },
  },
})(SidebarNavLink);
