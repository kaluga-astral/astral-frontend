import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Popover as ControlPopover } from '@material-ui/core';
import Button from './Button';

const ConfirmPopover = ({
  message,
  cancelText,
  confirmText,
  anchorOrigin,
  transformOrigin,
  classes,
  onConfirm,
  onReject,
  anchorEl,
  open,
  onClose,
}) => (
  <ControlPopover
    id="confirmPopover"
    open={open}
    anchorEl={anchorEl}
    anchorOrigin={anchorOrigin}
    transformOrigin={transformOrigin}
    onClose={onClose}
  >
    <div className={classes.message}>{message}</div>
    <Button onClick={onConfirm} className={classes.confirmButton}>{confirmText}</Button>
    <Button onClick={onReject} className={classes.cancelButton}>{cancelText}</Button>
  </ControlPopover>
);

ConfirmPopover.defaultProps = {
  anchorEl: null,
  cancelText: 'Нет',
  confirmText: 'Да',
  message: 'Удалить?',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
};

ConfirmPopover.propTypes = {
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  message: PropTypes.string,
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
  transformOrigin: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
  onConfirm: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  classes: PropTypes.shape({
    message: PropTypes.string,
    confirmButton: PropTypes.string,
    cancelButton: PropTypes.string,
  }).isRequired,
};

export default withStyles({
  message: {
    textAlign: 'center',
    marginTop: '10px',
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
  },
})(ConfirmPopover);
