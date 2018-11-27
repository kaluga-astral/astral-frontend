import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeLayoutProductTitle = ({ classes, className, ...props }) => (
  <div className={cn(classes.root, className)} {...props} />
);

HomeLayoutProductTitle.defaultProps = {
  className: null,
};

HomeLayoutProductTitle.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(theme => ({
  root: {
    marginLeft: '20px',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))(HomeLayoutProductTitle);
