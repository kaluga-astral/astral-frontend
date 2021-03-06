import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const AccountLayout = ({ classes, className, children }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

AccountLayout.defaultProps = {
  className: null,
};

AccountLayout.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    height: '100%',
  },
})(AccountLayout);
