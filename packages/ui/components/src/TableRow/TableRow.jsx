import React from 'react';
import { TableRow as MuiTableRow } from '@astral-frontend/core';
import { withStyles } from '@astral-frontend/styles';

const TableRow = props => <MuiTableRow {...props} />;

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
