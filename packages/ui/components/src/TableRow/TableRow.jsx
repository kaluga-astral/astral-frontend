import PropTypes from 'prop-types';
import React from 'react';
import { TableRow as MuiTableRow } from '@astral-frontend/core';
import { withStyles } from '@astral-frontend/styles';

import TableRowContext from './TableRowContext';

const TableRow = ({ children, ...props }) => {
  const [hovered, setHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
    <TableRowContext.Provider value={{ hovered }}>
      <MuiTableRow
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        {children}
      </MuiTableRow>
    </TableRowContext.Provider>
  );
};

TableRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default withStyles(theme => ({
  root: {
    position: 'relative',
    borderLeft: '4px solid transparent',
    transform: 'scale(1, 1)',
    '&$hover:hover': {
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.action.hover,
    },
  },
  hover: {
    cursor: 'pointer',
  },
}))(TableRow);
