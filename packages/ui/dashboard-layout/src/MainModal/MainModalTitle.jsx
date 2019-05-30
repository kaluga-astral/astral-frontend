import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { IconButton } from '@astral-frontend/components';
import { BackIcon } from '@astral-frontend/icons';
import { withStyles } from '@astral-frontend/styles';

import MainModalContext from './MainModalContext';

const DashboardLayoutMainModalTitle = ({ classes, className, children }) => {
  const { handleBackButtonClick } = React.useContext(MainModalContext);

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
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  backButton: {
    margin: '0 5px',
  },
  text: {
    padding: '12px',
    flexGrow: 1,
  },
})(DashboardLayoutMainModalTitle);
