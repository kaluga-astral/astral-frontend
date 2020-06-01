import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

import FlexContainer from '../FlexContainer';

const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
    },
  }),
  { name: 'SlideModalContent' },
);

export const SlideModalContent = ({
  className,
  children,
  component: Component,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Component
      className={cn(classes.root, className)}
      direction="column"
      {...props}
    >
      {children}
    </Component>
  );
};

SlideModalContent.defaultProps = {
  className: null,
  component: FlexContainer,
};

SlideModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  component: PropTypes.elementType,
};

export default SlideModalContent;
