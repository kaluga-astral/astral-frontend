import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SidebarNavLink from './NavLink';
import DefaultIcon from './NavDropdownLinkIcon';

const DasshboardNavDropdownLink = ({
  hasNotification, classes, className, icon: Icon, exact, to, text,
}) => (
  <SidebarNavLink
    className={cn(classes.root, className)}
    hasNotification={hasNotification}
    exact={exact}
    to={to}
    text={text}
    icon={() => <Icon to={to} />}
  />
);

DasshboardNavDropdownLink.defaultProps = {
  className: null,
  hasNotification: false,
  exact: false,
  icon: DefaultIcon,
};

DasshboardNavDropdownLink.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  hasNotification: PropTypes.bool,
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  icon: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default withStyles({
  root: {
    fontSize: '12px',
  },
})(DasshboardNavDropdownLink);
