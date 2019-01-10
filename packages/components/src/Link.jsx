import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const Link = ({ classes, className, ...props }) => (
  <RRLink {...props} className={cn(classes.root, className)} />
);

Link.defaultProps = {
  className: null,
  onClick: null,
};

Link.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default withStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    textDecoration: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))(Link);
