import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeMain = ({ className, children, classes }) => (
  <main className={cn(classes.root, className)}>{children}</main>
);

HomeMain.defaultProps = {
  className: null,
};

HomeMain.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default withStyles({
  root: {

  },
})(HomeMain);
