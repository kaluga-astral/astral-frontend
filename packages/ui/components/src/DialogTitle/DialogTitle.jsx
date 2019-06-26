import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DialogTitle as MuiDialogTitle } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { CrossIcon } from '@astral-frontend/icons';

import IconButton from '../IconButton';
import { __Context } from '../Dialog';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 32px 0',
  },
  title: {
    margin: 0,
    fontWeight: 300,
    fontSize: '18px',
    marginRight: '20px',
  },
  icon: {
    fontSize: '16px',
  },
});

const DialogTitle = ({
  children, className, ...props
}) => {
  const classes = useStyles();
  const { onClose } = useContext(__Context);

  return (
    <MuiDialogTitle {...props} className={cn(classes.root, className)} disableTypography>
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default DialogTitle;
