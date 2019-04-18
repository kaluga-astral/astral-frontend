/* eslint-disable import/no-extraneous-dependencies */
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

import { Avatar } from '@astral-frontend/core';

const DashboardLayoutCurrentUserInfo = ({ classes, className }) => (
  <div className={cn(classes.root, className)}>
    <Avatar className={cn(classes.avatar, className)}>TT</Avatar>
    <div className={cn(classes.label, className)}>Тестов Тест</div>
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
      display: 'flex',
      alignItems: 'center',
      margin: 'auto 15px 0px 15px',
      padding: '15px 0',
      borderTop: '0.5px solid rgba(29, 63, 102, 0.45)',
    },
    avatar: {
      color: '#fff',
      backgroundColor: '#4E30C7',
    },
    label: {
      marginLeft: '5px',
      color: '#072D57',
      fontSize: '14px',
    },
  }),
  { name: 'DashboardLayoutCurrentUserInfo' },
)(DashboardLayoutCurrentUserInfo);
