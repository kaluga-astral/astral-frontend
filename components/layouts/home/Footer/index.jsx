import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeLayoutFooter = ({ classes, className, ...props }) => (
  <footer className={cn(classes.root, className)} {...props} />
);

HomeLayoutFooter.defaultProps = {
  className: null,
};

HomeLayoutFooter.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {},
})(HomeLayoutFooter);
