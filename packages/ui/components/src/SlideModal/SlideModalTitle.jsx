import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ArrowRightIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

import IconButton from '../IconButton';

import SlideModalContext from './SlideModalContext';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(3),
    wordBreak: 'break-all',
    borderBottom: `1px solid ${theme.palette.primary.light}`,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    margin: 0,
    paddingBottom: theme.spacing(6),
    flexGrow: 1,
    fontStyle: 'bold',
    color: theme.palette.gray[900],
  },
  backIcon: {
    fill: theme.palette.gray[500],
  },
}));

const SlideModalTitle = ({ className, children }) => {
  const classes = useStyles();
  const { onClose } = useContext(SlideModalContext);

  return (
    <div className={cn(classes.root, className)}>
      <IconButton className={classes.backButton} onClick={onClose}>
        <ArrowRightIcon className={classes.backIcon} />
      </IconButton>
      <h2 className={classes.title}>{children}</h2>
    </div>
  );
};

SlideModalTitle.defaultProps = {
  className: null,
};

SlideModalTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SlideModalTitle;
