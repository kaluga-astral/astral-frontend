import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as MuiTooltip } from '@astral/core';

const Tooltip = ({ children, ...props }) => {
  return (
    <MuiTooltip arrow enterDelay={500} {...props}>
      <div>{children}</div>
    </MuiTooltip>
  );
};

Tooltip.defaultProps = {};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tooltip;
