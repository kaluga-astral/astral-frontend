import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

import { IconButton } from '@astral-frontend/components';
import { BackIcon } from '@astral-frontend/icons';
import { withStyles } from '@astral-frontend/styles';

const TRANSITION_DURATION = 400;

const DashboardLayoutMainModal = ({
  classes, className, title, children, history,
}) => {
  const [transitionIn, setTransitionIn] = useState(true);

  const defaultStyle = {
    transition: `right ${TRANSITION_DURATION}ms ease-in-out`,
    right: '-100%',
  };

  const transitionStyles = {
    entered: { right: 0 },
    exited: { right: '-100%' },
  };

  const handleBackButtonClick = () => {
    setTransitionIn(false);
    setTimeout(() => history.goBack(), TRANSITION_DURATION);
  };

  return (
    <Transition in={transitionIn} appear>
      {state => (
        <div
          className={cn(classes.root, className)}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          <div className={classes.header}>
            <IconButton className={classes.icon} onClick={handleBackButtonClick}>
              <BackIcon />
            </IconButton>
            <h2>{title}</h2>
          </div>
          {children}
        </div>
      )}
    </Transition>
  );
};

DashboardLayoutMainModal.defaultProps = {
  className: null,
};

DashboardLayoutMainModal.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withStyles(
  theme => ({
    root: {
      position: 'absolute',
      top: 0,
      height: '100%',
      width: '40%',
      minWidth: '550px',
      padding: '25px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0px 4px 56px rgba(0, 0, 0, 0.1)',
      borderTop: `1px solid ${theme.palette.grey[100]}`,
      overflowY: 'auto',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      padding: 0,
      marginRight: '15px',
    },
  }),
  { name: 'DashboardLayoutMainModal' },
)(withRouter(DashboardLayoutMainModal));
