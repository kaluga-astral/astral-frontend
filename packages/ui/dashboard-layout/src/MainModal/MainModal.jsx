import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
// import { Slide } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutMainModal = ({
  classes,
  className,
  children,
  ...props
}) => (
  <div className={cn(classes.root, className)} {...props}>
    {children}
  </div>
);

DashboardLayoutMainModal.defaultProps = {
  className: null,
};

DashboardLayoutMainModal.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '60%',
      minWidth: '550px',
      padding: '25px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: '5px 0 5px -5px rgba(0, 0, 0, 0.1)',
      borderTop: `1px solid ${theme.palette.grey[100]}`,
    },
  }),
  { name: 'DashboardLayoutMainModal' },
)(DashboardLayoutMainModal);
