import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const TableFooter = ({
  classes, className, children, ...props
}) => (
  <div {...props} className={cn(classes.root, className)}>
    {children}
  </div>
);

TableFooter.defaultProps = {
  children: null,
  className: null,
};

TableFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'min-content',
  },
}))(TableFooter);
