import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const Table = ({
  classes, className, children, ...props
}) => (
  <ol {...props} className={cn(classes.root, className)}>
    {children}
  </ol>
);

Table.defaultProps = {
  children: null,
  className: null,
};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(() => ({
  root: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
}))(Table);
