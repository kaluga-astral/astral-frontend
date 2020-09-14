import PropTypes from 'prop-types';
import React from 'react';

import AsideNavItem from '../AsideNavItem';

const DashboardLayoutAsideNavDropdown = ({ className, children, ...props }) => {
  return (
    <AsideNavItem className={className} {...props}>
      {children}
    </AsideNavItem>
  );
};

DashboardLayoutAsideNavDropdown.defaultProps = {
  className: null,
  counterValue: null,
  alwaysExpanded: null,
};

DashboardLayoutAsideNavDropdown.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  counterValue: PropTypes.string,
  alwaysExpanded: PropTypes.bool,
};

export default DashboardLayoutAsideNavDropdown;
