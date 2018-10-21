import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import Title from './Title';

const HomeLayoutProduct = ({ classes, className, ...props }) => (
  <div className={cn(classes.root, className)} {...props} />
);

HomeLayoutProduct.defaultProps = {
  className: null,
};

HomeLayoutProduct.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HomeLayoutProduct.Logo = Logo;
HomeLayoutProduct.Title = Title;

export default withStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    color: theme.palette.common.white,
  },
}))(HomeLayoutProduct);
