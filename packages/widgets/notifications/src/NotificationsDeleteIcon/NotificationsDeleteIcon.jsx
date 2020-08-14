import React from 'react';
import { SvgIcon } from '@astral-frontend/components';
import { useTheme } from '@astral-frontend/styles';

const NotificationsDeleteIcon = props => {
  const theme = useTheme();

  return (
    <SvgIcon width="22" height="22" viewBox="0 0 22 22" {...props}>
      <circle cx="11" cy="11" r="11" fill={theme.palette.error.main} />
      <path
        d="M9.5 6.5V7H7V8H7.5V14.5C7.5 15.05 7.95 15.5 8.5 15.5H13.5C14.05 15.5 14.5 15.05 14.5 14.5V8H15V7H12.5V6.5H9.5ZM8.5 8H13.5V14.5H8.5V8ZM9.5 9V13.5H10.5V9H9.5ZM11.5 9V13.5H12.5V9H11.5Z"
        fill={theme.palette.common.white}
      />
    </SvgIcon>
  );
};

export default NotificationsDeleteIcon;
