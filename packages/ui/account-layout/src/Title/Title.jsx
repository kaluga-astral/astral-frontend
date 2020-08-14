import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const AccountMainTitle = ({ classes, className, children }) => (
  <h1 className={cn(classes.root, className)}>{children}</h1>
);

AccountMainTitle.defaultProps = {
  className: null,
  children: null,
};

AccountMainTitle.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles(theme => ({
  root: {
    marginTop: 0,
    fontWeight: 300,
    fontSize: theme.typography.pxToRem(30),
    color: theme.palette.common.black,
  },
}))(AccountMainTitle);
