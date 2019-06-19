import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { IconButton } from '@astral-frontend/components';
import { BackIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

import MainModalContext from './MainModalContext';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 0 20px 0',
    wordBreak: 'break-all',
  },
  backButton: {
    margin: '0 5px',
  },
  text: {
    padding: '12px',
    flexGrow: 1,
  },
});

const DashboardLayoutMainModalTitle = ({ className, children }) => {
  const classes = useStyles();
  const { onClose } = React.useContext(MainModalContext);
  const handleBackButtonClick = React.useCallback(() => {
    onClose();
  });

  return (
    <div className={cn(classes.root, className)}>
      <IconButton className={classes.backButton} onClick={handleBackButtonClick}>
        <BackIcon />
      </IconButton>
      <div className={classes.text}>{children}</div>
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
