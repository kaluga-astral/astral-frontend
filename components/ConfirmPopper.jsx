import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Fade from '@material-ui/core/Fade';

import Paper from './Paper';
import Button from './Button';
import Popper from './Popper';

const ConfirmPopper = ({
  open,
  anchorEl,
  classes,
  confirmText,
  cancelText,
  message,
  onConfirm,
  onReject,
}) => (
  <Popper open={open} id="popper" anchorEl={anchorEl} transition>
    {({ TransitionProps }) => (
      <Fade {...TransitionProps} timeout={350}>
        <Paper>
          <div className={classes.message}>{message}</div>
          <Button onClick={onConfirm} className={classes.confirmButton}>{confirmText}</Button>
          <Button onClick={onReject} className={classes.cancelButton}>{cancelText}</Button>
        </Paper>
      </Fade>
    )}
  </Popper>
);

ConfirmPopper.defaultProps = {
  message: 'Удалить?',
  cancelText: 'Нет',
  confirmText: 'Да',
  anchorEl: null,
};

ConfirmPopper.propTypes = {
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  message: PropTypes.string,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.shape({
    message: PropTypes.string,
    confirmButton: PropTypes.string,
    cancelButton: PropTypes.string,
  }).isRequired,
  anchorEl: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  onConfirm: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};

export default withStyles({
  message: {
    fontSize: '14px',
    textAlign: 'center',
    paddingTop: '10px',
    marginBottom: '10px',
  },
  confirmButton: {
    borderRadius: '0',
    color: '#008bec',
    backgroundColor: '#FAFAFA',
    minWidth: '92px',
    minHeight: '28px',
  },
  cancelButton: {
    borderRadius: '0',
    color: '#fff',
    minWidth: '92px',
    minHeight: '28px',
    backgroundColor: '#008bec',
  },
})(ConfirmPopper);
