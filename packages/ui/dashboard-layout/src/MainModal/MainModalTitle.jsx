import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { IconButton } from '@astral-frontend/components';
import { BackIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

import MainModalContext from './MainModalContext';

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

const DashboardLayoutMainModalTitle = ({ className, children }) => {
  const classes = useStyles();
  const { onClose } = useContext(MainModalContext);

  return (
    <div className={cn(classes.root, className)}>
      <IconButton className={classes.backButton} onClick={onClose}>
        <BackIcon className={classes.backIcon} />
      </IconButton>
      <h2 className={classes.title}>{children}</h2>
    </div>
  );
};

DashboardLayoutMainModalTitle.defaultProps = {
  className: null,
};

DashboardLayoutMainModalTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardLayoutMainModalTitle;
