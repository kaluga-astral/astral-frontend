import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import AsideNavItem from '../AsideNavItem';

const DashboardLayoutAsideNavLink = ({ className, Icon, text, ...props }) => {
  return (
    <AsideNavItem {...props} text={text} Icon={Icon} component={NavLink} />
  );
};

DashboardLayoutAsideNavLink.defaultProps = {
  className: null,
};

DashboardLayoutAsideNavLink.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default DashboardLayoutAsideNavLink;
