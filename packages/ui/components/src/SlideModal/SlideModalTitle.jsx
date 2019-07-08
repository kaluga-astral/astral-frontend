import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { BackIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

import IconButton from '../IconButton';

import SlideModalContext from './SlideModalContext';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    wordBreak: 'break-all',
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    margin: 0,
    flexGrow: 1,
    fontStyle: 'bold',
    color: theme.palette.primary.main,
  },
  backIcon: {
    width: 18,
    height: 12,
    fill: theme.palette.primary.main,
  },
}));

const SlideModalTitle = ({ className, children }) => {
  const classes = useStyles();
  const { onClose } = useContext(SlideModalContext);

  return (
    <div className={cn(classes.root, className)}>
      <IconButton className={classes.backButton} onClick={onClose}>
        <BackIcon className={classes.backIcon} />
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
