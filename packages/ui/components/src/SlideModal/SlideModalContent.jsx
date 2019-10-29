import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingRight: theme.spacing(12),
    paddingLeft: theme.spacing(12),
    overflowY: 'auto',
    overflowX: 'hidden',
  },
}));

const SlideModalContent = ({ className, children }) => {
  const classes = useStyles();

  return <div className={cn(classes.root, className)}>{children}</div>;
};

SlideModalContent.defaultProps = {
  className: null,
};

SlideModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SlideModalContent;
