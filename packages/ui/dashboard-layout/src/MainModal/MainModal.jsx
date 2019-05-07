import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

import { IconButton } from '@astral-frontend/components';
import { BackIcon } from '@astral-frontend/icons';
import { withStyles } from '@astral-frontend/styles';

const TRANSITION_DURATION = 400;

const DashboardLayoutMainModal = ({
  classes, className, title, children, open, onClose,
}) => {
  const [transitionIn, setTransitionIn] = useState(false);

  useEffect(() => {
    setTransitionIn(open);
  }, [open]);

  const defaultStyle = {
    transition: `transform ${TRANSITION_DURATION}ms ease-in-out`,
    transform: 'translateX(100%)',
  };

  const transitionStyles = {
    entered: { transform: 'translate(0)' },
    exited: { transform: 'translateX(100%)' },
  };

  const handleBackButtonClick = () => {
    setTransitionIn(false);
    setTimeout(() => onClose(), TRANSITION_DURATION);
  };

  return (
    <Transition timeout={TRANSITION_DURATION} in={transitionIn} appear>
      {state => (
        <div className={cn(classes.root)} style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <div className={classes.empty}>&nbsp;</div>
          <div className={classes.content}>
            <div className={classes.header}>
              <IconButton className={classes.icon} onClick={handleBackButtonClick}>
                <BackIcon />
              </IconButton>
              <h3>{title}</h3>
            </div>
            <div className={cn(classes.container, className)}>{children}</div>
          </div>
        </div>
      )}
    </Transition>
  );
};

DashboardLayoutMainModal.defaultProps = {
  className: null,
  title: null,
  open: false,
};

DashboardLayoutMainModal.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({}).isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      zIndex: 1000,
    },
    empty: {
      flex: 2,
    },
    content: {
      flex: 1,
      minWidth: '550px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0px 4px 56px rgba(0, 0, 0, 0.1)',
      borderTop: `1px solid ${theme.palette.grey[100]}`,
      overflowY: 'auto',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '25px 25px 0',
      wordBreak: 'break-all',
    },
    icon: {
      padding: 0,
      marginRight: '15px',
    },
    container: {
      padding: '0 25px',
      height: '100%',
    },
  }),
  { name: 'DashboardLayoutMainModal' },
)(withRouter(DashboardLayoutMainModal));
