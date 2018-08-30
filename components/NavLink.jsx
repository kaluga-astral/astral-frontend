import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const NavLink = ({ className, classes, ...props }) => (
  <RRNavLink className={cn(classes.root, className)} {...props} />
);

NavLink.defaultProps = {
  className: null,
};

NavLink.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};

export default withStyles({
  root: {
    textDecoration: 'inherit',
  },
})(NavLink);
