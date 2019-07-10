import React from 'react';

import { TableCell as MuiTableCell } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      color: theme.palette.grey[600],
    },
  }),
  { name: 'TableCell' },
);

const TableCell = (props) => {
  const classes = useStyles();

  return <MuiTableCell classes={classes} {...props} />;
};

export default TableCell;
