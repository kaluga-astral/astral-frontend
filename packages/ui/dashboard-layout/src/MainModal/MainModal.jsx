import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Transition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@astral-frontend/styles';

import MainModalContext from './MainModalContext';

const TRANSITION_DURATION = 400;
const transitionStyles = {
  entered: { transform: 'translate(0)' },
  exited: { transform: 'translateX(100%)' },
};

const DashboardLayoutMainModal = ({
  classes, className, children, open, onClose,
}) => {
  const [transitionIn, setTransitionIn] = React.useState(open);
  React.useEffect(() => {
    setTransitionIn(open);
  }, [open]);
  const handleBackButtonClick = () => {
    setTransitionIn(false);
    setTimeout(() => onClose(), TRANSITION_DURATION);
  };

  return (
    <MainModalContext.Provider value={{ handleBackButtonClick }}>
      <Transition timeout={TRANSITION_DURATION} in={transitionIn} appear>
        {state => (
          <div className={cn(className, classes.root)} style={transitionStyles[state]}>
            {children}
          </div>
        )}
      </Transition>
    </MainModalContext.Provider>
  );
};

DashboardLayoutMainModal.defaultProps = {
  className: null,
  open: false,
};

DashboardLayoutMainModal.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({}).isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      position: 'absolute',
      right: '-15px',
      top: '-15px',
      bottom: '-15px',
      width: '40%',
      minWidth: '550px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0px 4px 56px rgba(0, 0, 0, 0.1)',
      borderTop: `1px solid ${theme.palette.grey[100]}`,
      transition: `transform ${TRANSITION_DURATION}ms ease-in-out`,
      transform: 'translateX(100%)',
      minHeight: '100%',
    },
  }),
  { name: 'DashboardLayoutMainModal' },
)(withRouter(DashboardLayoutMainModal));
