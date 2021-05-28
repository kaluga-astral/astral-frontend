import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@astral-frontend/styles';
import { DialogContent as MuiDialogContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 0,
    paddingBottom: theme.spacing(2),
  },
}));

const DialogContent = props => {
  const { className, ...rootProps } = props;
  const classes = useStyles(props);

  return (
    <MuiDialogContent className={cn(className, classes.root)} {...rootProps} />
  );
};

DialogContent.defaultProps = {
  className: null,
};

DialogContent.propTypes = {
  className: PropTypes.string,
};

export default DialogContent;
