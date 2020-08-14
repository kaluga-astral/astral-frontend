import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip } from '@astral-frontend/components';

import SidebarContext from '../Sidebar/SidebarContext';

const SidebarTooltip = ({ children, ...props }) => {
  const { expanded } = React.useContext(SidebarContext) || { expanded: true };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(!expanded);
  };

  return (
    <Tooltip
      placement="right"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      {...props}
    >
      {children}
    </Tooltip>
  );
};

SidebarTooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarTooltip;
