import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DialogTitle as MuiDialogTitle } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { CrossIcon } from '@astral-frontend/icons';

import IconButton from '../IconButton';
import { __Context } from '../Dialog';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontWeight: 300,
    fontSize: theme.typography.pxToRem(18),
    marginRight: '20px',
  },
  icon: {
    fontSize: theme.typography.pxToRem(16),
  },
}));

const DialogTitle = (props) => {
  const {
    className, children, ...rootProps
  } = props;
  const classes = useStyles(props);
  const { onClose } = useContext(__Context);

  return (
    <MuiDialogTitle className={cn(classes.root, className)} {...rootProps} disableTypography>
      <h1 className={classes.title}>{children}</h1>
      <IconButton onClick={onClose}>
        <CrossIcon className={classes.icon} />
      </IconButton>
    </MuiDialogTitle>
  );
};

DialogTitle.defaultProps = {
  className: null,
};

DialogTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DialogTitle;
