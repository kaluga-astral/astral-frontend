import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const HomeFooterSection = ({
  className,
  title,
  classes,
  children,
}) => (
  <nav className={cn(classes.root, className)}>
    <h4 className={classes.title}>{title}</h4>
    {children}
  </nav>
);

HomeFooterSection.defaultProps = {
  children: null,
  className: null,
  title: '',
};

HomeFooterSection.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles({
  root: {

  },
  title: {

  },
})(HomeFooterSection);
