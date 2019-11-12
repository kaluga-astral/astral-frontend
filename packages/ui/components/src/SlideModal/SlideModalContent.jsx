import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  theme => ({
    root: {
      flexGrow: 1,
      paddingRight: theme.spacing(12),
      paddingLeft: theme.spacing(12),
      overflowY: 'auto',
      overflowX: 'hidden',
    },
  }),
  { name: 'SlideModalContent' },
);

const SlideModalContent = ({
  className, children, component: Component, ...props
}) => {
  const classes = useStyles();

  return (
    <Component className={cn(classes.root, className)} {...props}>
      {children}
    </Component>
  );
};

SlideModalContent.defaultProps = {
  className: null,
  component: 'div',
};

SlideModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  component: PropTypes.elementType,
};

export default SlideModalContent;
