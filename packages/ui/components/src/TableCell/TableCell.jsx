import React from 'react';

import { TableCell as MuiTableCell } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      // FIXME
      color: 'rgba(29, 63, 102, 0.62)',
    },
    head: {
      padding: '20px 20px 20px 16px',
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
  { name: 'TableCell' },
);

const TableCell = (props) => {
  const classes = useStyles();

  return <MuiTableCell classes={classes} {...props} />;
};

export default TableCell;
