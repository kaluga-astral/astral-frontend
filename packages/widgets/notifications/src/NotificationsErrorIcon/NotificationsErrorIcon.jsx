import React from 'react';
import { SvgIcon } from '@astral-frontend/components';
import { useTheme } from '@astral-frontend/styles';

const NotificationsErrorIcon = props => {
  const theme = useTheme();

  return (
    <SvgIcon width="22" height="22" viewBox="0 0 22 22" {...props}>
      <circle cx="11" cy="11" r="10" fill={theme.palette.error.main} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.71835 7.28392C6.56214 7.12771 6.56214 6.87444 6.71835 6.71823C6.87456 6.56202 7.12782 6.56202 7.28403 6.71823L11.0011 10.4353L14.7177 6.71868C14.874 6.56247 15.1272 6.56247 15.2834 6.71868C15.4396 6.87489 15.4396 7.12815 15.2834 7.28436L11.5668 11.001L15.284 14.7182C15.4402 14.8744 15.4402 15.1277 15.284 15.2839C15.1278 15.4401 14.8746 15.4401 14.7183 15.2839L11.0011 11.5667L7.28343 15.2844C7.12722 15.4406 6.87395 15.4406 6.71774 15.2844C6.56153 15.1282 6.56153 14.8749 6.71774 14.7187L10.4354 11.001L6.71835 7.28392Z"
        fill={theme.palette.common.white}
      />
    </SvgIcon>
  );
};

export default NotificationsErrorIcon;
