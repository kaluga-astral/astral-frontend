import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeLayoutProductLogo = ({ classes, className, ...props }) => (
  <div className={cn(classes.root, className)} {...props} />
);

HomeLayoutProductLogo.defaultProps = {
  className: null,
};

HomeLayoutProductLogo.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(theme => ({
  root: {
    marginRight: '15px',
  },
}))(HomeLayoutProductLogo);
