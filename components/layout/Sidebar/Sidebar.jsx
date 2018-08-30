import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Sidebar = ({ classes, children, className }) => (
  <aside className={cn(classes.root, className)}>{children}</aside>
);

Sidebar.defaultProps = {
  className: null,
  children: null,
};

Sidebar.propTypes = {
  classes: PropTypes.shape().isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default withStyles({
  root: {
    flex: '1 0 288px',
    maxWidth: '288px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.103884)',
    background: '#005EA0', // FIXME: в переменные
    overflowY: 'auto',
    zIndex: 2,
  },
})(Sidebar);
