import React from 'react';
import { makeStyles } from '@astral-frontend/styles';
import { DialogActions as MuiDialogActions } from '@astral-frontend/core';

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: '15px 32px 32px',
  },
});

const DialogActions = (props) => {
  const classes = useStyles();

  return (
    <MuiDialogActions classes={classes} {...props} />
  );
};

export default DialogActions;
