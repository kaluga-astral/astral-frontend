import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeFooter = ({ className, classes, children }) => (
  <footer className={cn(classes.root, className)}>{children}</footer>
);

HomeFooter.defaultProps = {
  children: null,
  className: null,
};

HomeFooter.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default withStyles({
  root: {

  },
})(HomeFooter);
