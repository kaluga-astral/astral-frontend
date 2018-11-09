import React from 'react';
import PropTypes from 'prop-types';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '../IconButton';

import CloseIcon from './CloseIcon';

const DialogTitle = ({
  children,
  onIconClick,
  ...props
}) => (
  <MuiDialogTitle {...props} disableTypography>
    {children}
    <IconButton onClick={onIconClick}>
      <CloseIcon />
    </IconButton>
  </MuiDialogTitle>
);

DialogTitle.defaultProps = {
  onIconClick: () => { },
};

DialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  onIconClick: PropTypes.func,
};

export default withStyles({
  root: {
    borderBottom: '1px solid #ededed',
    padding: '32px',
    fontWeight: 300,
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})(DialogTitle);
