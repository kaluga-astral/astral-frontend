import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '../IconButton';
import { Context } from './Dialog';
import CloseIcon from './CloseIcon';

const DialogTitle = ({
  children, classes, className, ...props
}) => (
  <Context.Consumer>
    {({ onClose }) => (
      <MuiDialogTitle {...props} className={cn(classes.root, className)} disableTypography>
        <h1 className={classes.title}>{children}</h1>
        <IconButton onClick={onClose}>
          <CloseIcon />
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ededed',
    padding: '15px 30px',
  },
  title: {
    margin: 0,
    fontWeight: 300,
    fontSize: '24px',
    marginRight: '20px',
  },
})(DialogTitle);
