import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip } from '@astral-frontend/components';

import SidebarContext from '../Sidebar/SidebarContext';

const SidebarTooltip = ({ children, ...props }) => {
  const { expanded } = React.useContext(SidebarContext);

  if (expanded) {
    return (
      <Tooltip placement="right" {...props}>
        {children}
      </Tooltip>
    );
  }

  return children;
};

SidebarTooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarTooltip;
