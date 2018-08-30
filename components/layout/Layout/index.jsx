import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Layout = ({ classes, className, children }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

Layout.defaultProps = {
  className: null,
};

Layout.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    height: '100%',
  },
})(Layout);
