import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { IconButton } from '@astral-frontend/components';
import { BackIcon } from '@astral-frontend/icons';
import { makeStyles } from '@astral-frontend/styles';

import MainModalContext from './MainModalContext';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 0',
    wordBreak: 'break-all',
    borderBottom: `1px solid ${theme.palette.grey[100]}`,
  },
  backButton: {
    margin: '0 10px',
  },
  content: {
    flexGrow: 1,
  },
}));

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
      <div className={classes.content}>{children}</div>
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
