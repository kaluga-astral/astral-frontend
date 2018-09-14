import pathToRegexp from 'path-to-regexp';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import SvgIcon from '../../../../SvgIcon';
import NavLink from './NavLink';

const NavDropdownLinkIcon = ({ isActive }) => (
  <SvgIcon viewBox="0 0 8 8">
    <circle
      cx="4"
      cy="4"
      r="3.75"
      fill={isActive ? 'white' : 'none'}
      stroke="white"
      strokeWidth="0.5"
    />
  </SvgIcon>
);

NavDropdownLinkIcon.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

class NavDropdownLink extends PureComponent {
  get isActive() {
    const { location, to } = this.props;

    return pathToRegexp(location.pathname).test(to);
  }

  render = () => {
    const {
      classes, className, icon: Icon, exact, to, text,
    } = this.props;

    return (
      <NavLink
        className={cn(classes.root, className)}
        exact={exact}
        to={to}
        icon={() => <Icon isActive={this.isActive} />}
        text={text}
      />
    );
  };
}

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
  location: PropTypes.shape({
    pathname: PropTypes.isRequired,
  }).isRequired,
};

export default withStyles({
  root: {
    fontSize: '8px',
  },
})(withRouter(NavDropdownLink));
