import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DialogTitle as MuiDialogTitle } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';
import { CrossIcon } from '@astral-frontend/icons';

import IconButton from '../IconButton';
import { __Context } from '../Dialog';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(3),
    },
    title: {
      margin: 0,
      fontWeight: 600,
      fontSize: theme.typography.pxToRem(14),
      marginRight: theme.spacing(5),
    },
    icon: {
      fontSize: theme.typography.pxToRem(16),
    },
  }),
  { name: 'DialogTitle' },
);

const DialogTitle = props => {
  const { showCloseButton, className, children, ...rootProps } = props;
  const classes = useStyles(props);
  const { onClose } = useContext(__Context);

  return (
    <MuiDialogTitle
      className={cn(classes.root, className)}
      {...rootProps}
      disableTypography
    >
      <h1 className={classes.title}>{children}</h1>
      {showCloseButton && (
        <IconButton onClick={onClose}>
          <CrossIcon className={classes.icon} />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};

DialogTitle.defaultProps = {
  showCloseButton: true,
  className: null,
};

DialogTitle.propTypes = {
  showCloseButton: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DialogTitle;
