import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip, Box } from '@astral-frontend/components';

import SidebarContext from '../Sidebar/SidebarContext';
import SidebarCounter from '../SidebarCounter';

const SidebarTooltip = ({
  children,
  className,
  counterValue,
  title,
  ...props
}) => {
  const { expanded } = React.useContext(SidebarContext);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(!expanded);
  };

  return (
    <Tooltip
      className={className}
      placement="right"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      title={
        <Box display="flex" alignContent="center" justifyContent="center">
          {title}
          {!expanded && Boolean(counterValue) && (
            <SidebarCounter counterValue={counterValue} />
          )}
        </Box>
      }
      {...props}
    >
      {children}
    </Tooltip>
  );
};

SidebarTooltip.defaultProps = {
  className: null,
  counterValue: 0,
};

SidebarTooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  counterValue: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default SidebarTooltip;
