import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { DialogTitle as MuiDialogTitle } from '@material-ui/core';
import { makeStyles } from '@astral-frontend/styles';
import { CrossIcon } from '@astral-frontend/icons';

import IconButton from '../IconButton';
import Box from '../Box';
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
      marginRight: theme.spacing(3),
    },
    closeIcon: {
      fontSize: theme.typography.pxToRem(16),
    },
  }),
  { name: 'DialogTitle' },
);

const DialogTitle = props => {
  const { showCloseButton, className, children, Icon, ...rootProps } = props;
  const classes = useStyles(props);
  const { onClose } = useContext(__Context);

  return (
    <MuiDialogTitle
      className={cn(classes.root, className)}
      {...rootProps}
      disableTypography
    >
      <Box display="inline-flex" alignItems="center">
        {Icon && <Icon className={classes.icon} />}
        <h1 className={classes.title}>{children}</h1>
      </Box>
      {showCloseButton && (
        <IconButton onClick={onClose}>
          <CrossIcon className={classes.closeIcon} />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};

DialogTitle.defaultProps = {
  showCloseButton: true,
  className: null,
  Icon: null,
};

DialogTitle.propTypes = {
  showCloseButton: PropTypes.bool,
  className: PropTypes.string,
  Icon: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default DialogTitle;
