import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip as MuiTooltip } from '@astral-frontend/core';

const Tooltip = ({ children, ...props }) => {
  return (
    <MuiTooltip arrow enterDelay={1000} {...props}>
      {children}
    </MuiTooltip>
  );
};

Tooltip.defaultProps = {};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tooltip;
