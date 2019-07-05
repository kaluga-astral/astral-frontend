import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

import FlexContainer from '../FlexContainer';

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.grey[100]}`,
  },
}));

const SlideModalFooter = ({
  className, children, ...props
}) => {
  const classes = useStyles();

  return (
    <FlexContainer
      component="footer"
      className={cn(classes.root, className)}
      {...props}
    >
      {children}
    </FlexContainer>
  );
};

SlideModalFooter.defaultProps = {
  className: null,
};

SlideModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SlideModalFooter;
