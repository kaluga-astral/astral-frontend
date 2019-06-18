import PropTypes from 'prop-types';
import React from 'react';

import { Dialog as MuiDialog } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

import DialogContext from './DialogContext';

const useStyles = makeStyles({
  paper: {
    borderRadius: '2px',
  },
});

const Dialog = ({ onClose, open, ...props }) => {
  const classes = useStyles();

  return (
    <DialogContext.Provider value={{ onClose }}>
      <MuiDialog {...props} open={open} classes={classes} onClose={onClose} />
    </DialogContext.Provider>
  );
};

Dialog.defaultProps = {
  open: false,
};

Dialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
