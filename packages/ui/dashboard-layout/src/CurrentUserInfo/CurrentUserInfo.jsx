import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const DashboardLayoutCurrentUserInfo = ({ classes, className }) => (
  <div className={cn(classes.root, className)}>
    CurrentUserInfo
  </div>
);

DashboardLayoutCurrentUserInfo.defaultProps = {
  className: null,

};

DashboardLayoutCurrentUserInfo.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
};

export default withStyles(
  () => ({
    root: {
      margin: 'auto 15px 0',
      padding: '15px 0',
      borderTop: '0.5px solid rgba(29, 63, 102, 0.45)',
    },
  }),
  { name: 'DashboardLayoutCurrentUserInfo' },
)(DashboardLayoutCurrentUserInfo);
