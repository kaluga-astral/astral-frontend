import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral/styles';

import FlexContainer from '../FlexContainer';

const useStyles = makeStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.primary.light}`,
  },
  padding: {
    padding: `${theme.spacing(4)}px ${theme.spacing(12)}px`,
  },
}));

export const SlideModalFooter = ({
  className,
  children,
  disablePadding,
  ...props
}) => {
  const classes = useStyles();

  return (
    <FlexContainer
      component="footer"
      className={cn(classes.root, className, {
        [classes.padding]: !disablePadding,
      })}
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
