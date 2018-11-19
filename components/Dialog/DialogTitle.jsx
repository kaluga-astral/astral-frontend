import React from 'react';
import PropTypes from 'prop-types';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '../IconButton';
import { Context } from './Dialog';
import CloseIcon from './CloseIcon';

const DialogTitle = ({ children, ...props }) => (
  <Context.Consumer>
    {({ onClose }) => (
      <MuiDialogTitle {...props} disableTypography>
        {children}
        <IconButton onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </MuiDialogTitle>
    )}
  </Context.Consumer>
);

DialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    borderBottom: '1px solid #ededed',
    padding: '15px 30px',
    fontWeight: 300,
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})(DialogTitle);
