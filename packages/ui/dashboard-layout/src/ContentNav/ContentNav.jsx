import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import ActionButton from '../ActionButton';

const DashboardLayoutContentNav = ({
  classes, className, actionTitle, actionIcon, children,
}) => (
  <nav className={cn(classes.root, className)}>
    <div className={classes.wrapper}>{children}</div>
    {actionTitle && (
      <ActionButton
        iconPosition="right"
        text={actionTitle}
        Icon={actionIcon}
        className={classes.action}
      />
    )}
  </nav>
);

DashboardLayoutContentNav.defaultProps = {
  actionTitle: null,
  className: null,
  actionIcon: null,
};

DashboardLayoutContentNav.propTypes = {
  actionTitle: PropTypes.string,
  actionIcon: PropTypes.func,
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles(
  () => ({
    root: {
      height: '65px',
      backgroundColor: 'white',
      display: 'flex',
    },
    wrapper: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      height: '100%',
      margin: '0 15px',
      borderTop: '1px solid rgba(29, 63, 102, 0.09)',
      '&>*': {
        marginRight: '40px',
      },
    },
    action: {
      marginLeft: 'auto',
      height: '100%',
      justifyContent: 'center',
    },
  }),
  { name: 'DashboardLayoutContent' },
)(DashboardLayoutContentNav);
