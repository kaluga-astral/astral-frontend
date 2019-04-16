/* eslint-disable import/no-extraneous-dependencies */
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import { Avatar } from '@astral-frontend/core';

const DashboardLayoutCurrentUserInfo = ({ classes, className }) => (
  <div>
    <div className={cn(classes.avatarWrapper, className)}>
      <Avatar className={cn(classes.avatarImage, className)}>TT</Avatar>
      <div className={cn(classes.avatarLabel, className)}>Тестов Тест</div>
    </div>
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
    avatarWrapper: {
      display: 'flex',
      alignItems: 'center',
      padding: '24px 0 16px 0',
      margin: '0 68px 0 24px',
      borderTop: '0.5px solid rgba(29, 63, 102, 0.45)',
    },
    avatarImage: {
      color: '#fff',
      backgroundColor: '#4E30C7',
    },
    avatarLabel: {
      marginLeft: '5px',
      color: '#072D57',
      fontSize: '14px',
    },
  }),
  { name: 'DashboardLayoutCurrentUserInfo' },
)(DashboardLayoutCurrentUserInfo);
