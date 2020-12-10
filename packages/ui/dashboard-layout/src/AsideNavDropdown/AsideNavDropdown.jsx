import PropTypes from 'prop-types';
import React from 'react';

import AsideNavItem from '../AsideNavItem';
import { AsideContextProvider } from '../Aside';

const DashboardLayoutAsideNavDropdown = ({ className, children, ...props }) => {
  return (
    <AsideContextProvider>
      <AsideNavItem className={className} {...props}>
        {children}
      </AsideNavItem>
    </AsideContextProvider>
  );
};

DashboardLayoutAsideNavDropdown.defaultProps = {
  className: null,
  counterValue: 0,
  alwaysExpandedDropdown: null,
};

DashboardLayoutAsideNavDropdown.propTypes = {
  className: PropTypes.string,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  counterValue: PropTypes.number,
  alwaysExpandedDropdown: PropTypes.bool,
};

export default DashboardLayoutAsideNavDropdown;
