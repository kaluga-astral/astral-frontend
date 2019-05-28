import PropTypes from 'prop-types';
import React from 'react';
import { TableCell as MuiTableCell } from '@astral-frontend/core';

import { TableRowContext } from '../TableRow';

const TableCell = ({ HoveredComponent, children, ...props }) => {
  const hoveredContext = React.useContext(TableRowContext);

  const renderHoveredComponent = () => {
    if (typeof HoveredComponent === 'function') {
      return <HoveredComponent />;
    }

    return HoveredComponent;
  };

  return (
    <MuiTableCell {...props}>
      {hoveredContext.hovered && HoveredComponent ? renderHoveredComponent() : children}
    </MuiTableCell>
  );
};

TableCell.defaultProps = {
  HoveredComponent: null,
  children: null,
};

TableCell.propTypes = {
  HoveredComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  children: PropTypes.arrayOf(PropTypes.node),
};

export default TableCell;
