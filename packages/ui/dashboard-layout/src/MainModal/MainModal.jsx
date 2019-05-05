import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Transition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

import { IconButton } from '@astral-frontend/components';
import { BackIcon } from '@astral-frontend/icons';
import { withStyles } from '@astral-frontend/styles';

const TRANSITION_DURATION = 400;

const DashboardLayoutMainModal = ({
  classes, className, title, children, open, onClose,
}) => {
  const defaultStyle = {
    transition: `right ${TRANSITION_DURATION}ms ease-in-out`,
    right: '-100%',
  };

  const transitionStyles = {
    entered: { right: 0 },
    exited: { right: '-100%' },
  };

  return (
    <Transition timeout={0} in={open} appear>
      {state => (
        <div className={cn(classes.root)} style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <div className={classes.empty}>&nbsp;</div>
          <div className={classes.content}>
            <div className={classes.header}>
              <IconButton className={classes.icon} onClick={onClose}>
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
      height: '100%',
      width: '100%',
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
