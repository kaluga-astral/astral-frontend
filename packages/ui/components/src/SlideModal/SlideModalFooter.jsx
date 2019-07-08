import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';
import FlexContainer from '../FlexContainer';

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.grey[100]}`,
  },
  padding: {
    padding: '20px',
  },
}));

const SlideModalFooter = ({
  className, children, disablePadding, ...props
}) => {
  const classes = useStyles();

  return (
    <FlexContainer
      component="footer"
      className={cn(classes.root, className, { [classes.padding]: !disablePadding })}
      {...props}
    >
      {children}
    </FlexContainer>
  );
};

SlideModalFooter.defaultProps = {
  className: null,
  disablePadding: false,
};

SlideModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disablePadding: PropTypes.bool,
};

export default SlideModalFooter;
