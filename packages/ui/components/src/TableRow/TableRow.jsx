import PropTypes from 'prop-types';
import React from 'react';
import { TableRow as MuiTableRow } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

import TableRowContext from './TableRowContext';

const useStyles = makeStyles(theme => ({
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
}));

const TableRow = ({ children, Actions, ...props }) => {
  const classes = useStyles();
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
        classes={classes}
        {...props}
      >
        {children}
        <Actions />
      </MuiTableRow>
    </TableRowContext.Provider>
  );
};

TableRow.defaultProps = {
  Actions: () => null,
  hover: false,
};

TableRow.propTypes = {
  hover: PropTypes.bool,
  Actions: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default TableRow;
