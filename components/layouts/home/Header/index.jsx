import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeLayoutHeader = ({ classes, className, ...props }) => (
  <header className={cn(classes.root, className)} {...props} />
);

HomeLayoutHeader.defaultProps = {
  className: null,
};

HomeLayoutHeader.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(theme => ({
  root: {
    height: '85px',
    background: theme.palette.primary.dark,
  },
}))(HomeLayoutHeader);
