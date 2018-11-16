import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { MenuItem } from '../../../../Menu';
import SidebarNavLink from './NavLink';
import DefaultIcon from './NavDropdownLinkIcon';

const NavDropdownLink = ({
  classes, className, icon: Icon, exact, to, text,
}) => (
  <MenuItem
    component={SidebarNavLink}
    className={cn(classes.root, className)}
    exact={exact}
    to={to}
    text={text}
    icon={() => <Icon to={to} />}
  />
);

NavDropdownLink.defaultProps = {
  className: null,
  exact: false,
  icon: DefaultIcon,
};

NavDropdownLink.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  icon: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default withStyles({
  root: {
    fontSize: '8px',
  },
})(NavDropdownLink);
