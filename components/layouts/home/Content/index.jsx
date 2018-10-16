import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeLayoutContent = ({ classes, className, ...props }) => (
  <div className={cn(classes.root, className)} {...props} />
);

HomeLayoutContent.defaultProps = {
  className: null,
};

HomeLayoutContent.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    flex: 1,
  },
})(HomeLayoutContent);
