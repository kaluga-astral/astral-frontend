import React from 'react';
import { SvgIcon } from '@astral-frontend/components';
import { useTheme } from '@astral-frontend/styles';

const NotificationsInformationIcon = props => {
  const theme = useTheme();

  return (
    <SvgIcon width="22" height="22" viewBox="0 0 22 22" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M10.0607 14C9.94776 14.0005 9.8392 13.9561 9.75851 13.8764L7.11319 11.2058C6.95737 11.0342 6.96311 10.7693 7.12621 10.6047C7.28931 10.4402 7.55192 10.4344 7.722 10.5916L10.0607 12.951L14.8292 8.14107C14.9363 8.02321 15.0988 7.97411 15.2524 8.01323C15.406 8.05235 15.526 8.17337 15.5647 8.32835C15.6035 8.48334 15.5549 8.64729 15.438 8.75528L10.3655 13.8764C10.2842 13.9568 10.1745 14.0012 10.0607 14Z"
        fill={theme.palette.common.white}
      />
    </SvgIcon>
  );
};

export default NotificationsInformationIcon;
