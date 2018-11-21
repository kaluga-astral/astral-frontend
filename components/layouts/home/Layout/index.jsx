import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeLayout = ({ classes, className, children }) => (
  <div className={cn(classes.root, className)}>{children}</div>
);

HomeLayout.defaultProps = {
  className: null,
};

HomeLayout.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    // minHeight: '100%',
  },
})(HomeLayout);
