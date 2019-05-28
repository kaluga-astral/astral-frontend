import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { TableRow as MuiTableRow } from '@astral-frontend/core';
import { withStyles } from '@astral-frontend/styles';

import TableRowContext from './TableRowContext';

const TableRow = ({ children, ...props }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <MuiTableRow
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <TableRowContext.Provider value={{ hovered }}>{children}</TableRowContext.Provider>
    </MuiTableRow>
  );
};

TableRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default withStyles(theme => ({
  root: {
    borderLeft: '4px solid transparent',
    '&$hover:hover': {
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.action.hover,
    },
  },
  hover: {
    cursor: 'pointer',
  },
}))(TableRow);
