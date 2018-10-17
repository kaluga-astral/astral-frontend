// import pathToRegexp from 'path-to-regexp';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
// import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import SvgIcon from '../../../../SvgIcon';
import NavLink from './NavLink';

// TODO:
// get isActive() {
// const { location, to } = this.props;
// return pathToRegexp(location.pathname).test(to);
// }
const NavDropdownLinkIcon = () => (
  <SvgIcon viewBox="0 0 8 8">
    <circle cx="4" cy="4" r="3.75" stroke="white" strokeWidth="0.5" />
  </SvgIcon>
);
// withRouter

NavDropdownLinkIcon.propTypes = {
  // isActive: PropTypes.bool.isRequired,
};

const NavDropdownLink = ({
  classes, className, icon, exact, to, text,
}) => (
  <NavLink className={cn(classes.root, className)} exact={exact} to={to} icon={icon} text={text} />
);

NavDropdownLink.defaultProps = {
  className: null,
  exact: false,
  icon: NavDropdownLinkIcon,
};

NavDropdownLink.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  icon: PropTypes.func,
  text: PropTypes.string.isRequired,
  // location: PropTypes.shape({
  //   pathname: PropTypes.isRequired,
  // }).isRequired,
};

export default withStyles({
  root: {
    fontSize: '8px',
  },
})(NavDropdownLink);
