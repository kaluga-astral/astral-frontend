import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const HomeFooterSectionItem = ({
  className,
  classes,
  children,
  to,
}) => (
  <Link className={cn(classes.root, className)} to={to}>
    {children}
  </Link>
);

HomeFooterSectionItem.defaultProps = {
  className: null,
  children: null,
  to: '/',
};

HomeFooterSectionItem.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default withStyles(theme => ({
  root: {
    display: 'block',
    fontSize: '16px',
    color: theme.palette.common.white,
    lineHeight: '30px',
    textDecoration: 'none',
    '&:visited': {
      color: theme.palette.common.white,
    },
  },
}))(HomeFooterSectionItem);
