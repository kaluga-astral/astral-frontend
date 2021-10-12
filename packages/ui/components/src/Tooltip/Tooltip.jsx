import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as MuiTooltip } from '@astral-frontend/core';

const Tooltip = ({ children, interactive, ...props }) => {
  return (
    <MuiTooltip
      disableInteractive={!interactive}
      arrow
      enterDelay={500}
      {...props}
    >
      <div>{children}</div>
    </MuiTooltip>
  );
};

Tooltip.defaultProps = {
  interactive: false,
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  interactive: PropTypes.bool,
};

export default Tooltip;
