import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

import Drawer from '../Drawer';

const useStyles = makeStyles(
  () => {
    const getContainerPosition = ({ contain }) => (contain ? 'absolute' : null);

    const getWidth = ({ size }) => {
      switch (size) {
        case 'small':
          return '40%';
        case 'medium':
          return '60%';
        case 'large':
          return '80%';
        default:
          return null;
      }
    };

    return {
      paper: {
        position: getContainerPosition,
        width: getWidth,
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
        borderLeft: 'none',
      },
    };
  },
  { name: 'SlideModalDrawer' },
);

const SlideModalDrawer = (props) => {
  const {
    size, contain, children, ...restProps
  } = props;
  const classes = useStyles({ size, contain });

  return (
    <Drawer {...restProps} classes={classes} variant="persistent">
      {children}
    </Drawer>
  );
};

SlideModalDrawer.defaultProps = {
  size: 'medium',
  anchor: 'right',
  transitionDuration: { enter: 400, exit: 250 },
};

SlideModalDrawer.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  contain: PropTypes.bool.isRequired,
  transitionDuration: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};

export default SlideModalDrawer;
