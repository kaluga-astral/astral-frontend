import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { DialogActions as MuiDialogActions } from '@astral-frontend/core';

const useStyles = makeStyles({
  root: {
  },
});

const DialogActions = (props) => {
  const classes = useStyles();

  return (
    <MuiDialogActions classes={classes} {...props} />
  );
};

export default DialogActions;
