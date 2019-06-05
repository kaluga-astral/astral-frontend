import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const FormGridRow = ({
  children, title, classes, className, ...props
}) => (
  <div {...props} className={cn(classes.root, className)}>
    {title && <h4 className={classes.title}>{title}</h4>}
    <div className={classes.main}>{children}</div>
  </div>
);

FormGridRow.defaultProps = {
  title: null,
  className: null,
};

FormGridRow.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
};

export default withStyles({
  root: {
    marginBottom: '20px',
  },
  main: {
    display: 'flex',
  },
  title: {
    margin: '0 0 5px 0',
    fontSize: '14px',
    color: '#1d3f66', // FIXME: use colors from theme
  },
})(FormGridRow);
