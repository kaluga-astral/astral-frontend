import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeLayoutMain = ({ classes, className, ...props }) => (
  <main className={cn(classes.root, className)} {...props} />
);

HomeLayoutMain.defaultProps = {
  className: null,
};

HomeLayoutMain.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {},
})(HomeLayoutMain);
