import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@astral-frontend/styles';
import { DialogActions as MuiDialogActions } from '@astral-frontend/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6),
  },
}));

const DialogActions = props => {
  const { className, ...rootProps } = props;
  const classes = useStyles(props);

  return (
    <MuiDialogActions className={cn(className, classes.root)} {...rootProps} />
  );
};

DialogActions.defaultProps = {
  className: null,
};

DialogActions.propTypes = {
  className: PropTypes.string,
};

export default DialogActions;
