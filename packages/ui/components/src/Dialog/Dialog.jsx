import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Dialog as MuiDialog } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

import DialogContext from './DialogContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      borderRadius: theme.spacing(1),
    },
  }),
  { name: 'Dialog' },
);

const Dialog = props => {
  const { open, className, onClose, ...rootProps } = props;
  const classes = useStyles(props);

  return (
    <DialogContext.Provider value={{ onClose }}>
      <MuiDialog
        open={open}
        className={cn(className, classes.root)}
        onClose={onClose}
        {...rootProps}
      />
    </DialogContext.Provider>
  );
};

Dialog.defaultProps = {
  open: false,
  className: null,
};

Dialog.propTypes = {
  open: PropTypes.bool,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;
