import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeFooterContainer = ({ classes, className, children }) => (
  <div className={cn(classes.root, className)}>
    {children}
  </div>
);

HomeFooterContainer.defaultProps = {
  className: null,
  children: null,
};

HomeFooterContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
};

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

HomeFooter.Container = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})(HomeFooterContainer);

export default withStyles({
  root: {
    backgroundColor: '#0065B1',
    padding: '45px 134px',
  },
})(HomeFooter);
