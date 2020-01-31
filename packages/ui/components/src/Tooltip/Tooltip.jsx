import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as MuiTooltip } from '@astral-frontend/core';

const Tooltip = props => {
  const { children, title, placement } = props;

  return (
    <MuiTooltip arrow placement={placement} title={title}>
      <div>{children}</div>
    </MuiTooltip>
  );
};

Tooltip.defaultProps = {};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
};

export default Tooltip;
