import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { DialogContent as MuiDialogContent } from '@astral-frontend/core';

const useStyles = makeStyles({
  root: {
    padding: '32px',
    '&:not(:last-child) ': {
      paddingBottom: 0,
    },
  },
});

const DialogContent = (props) => {
  const classes = useStyles();
  return (
    <MuiDialogContent {...props} classes={classes} />
  );
};

export default DialogContent;
