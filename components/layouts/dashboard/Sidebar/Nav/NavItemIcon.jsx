import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const DashboardSidebarNavItemIcon = ({ classes, icon: Icon, hasNotification }) => (
  <div className={cn(classes.root, { [classes.hasNotification]: hasNotification })}>
    <Icon />
  </div>
);

DashboardSidebarNavItemIcon.propTypes = {
  classes: PropTypes.shape().isRequired,
  icon: PropTypes.func.isRequired,
  hasNotification: PropTypes.bool.isRequired,
};

export default withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '20px',
    width: '16px',
    flexShrink: 0,
    position: 'relative',
    marginRight: '20px',
    '&$hasNotification': {
      '&::before': {
        display: 'block',
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        width: '10px',
        height: '10px',
        background: 'red',
        borderRadius: '50%',
        content: '""',
      },
    },
  },
  hasNotification: {},
})(DashboardSidebarNavItemIcon);
