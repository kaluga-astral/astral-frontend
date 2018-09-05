import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const NavLink = ({ classes, className, ...props }) => (
  <RRNavLink {...props} className={cn(classes.root, className)} />
);

NavLink.defaultProps = {
  className: null,
  onClick: null,
};

NavLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default withStyles({
  root: {
    textDecoration: 'inherit',
  },
})(NavLink);
