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
        d="M11 0C4.91333 0 0 4.91333 0 11C0 17.0867 4.91333 22 11 22C17.0867 22 22 17.0867 22 11C22 4.91333 17.0867 0 11 0ZM12.0469 9.0752V17H9.92285V9.0752H12.0469ZM9.79834 7.02441C9.79834 6.70703 9.90332 6.4458 10.1133 6.24072C10.3281 6.03564 10.6187 5.93311 10.9849 5.93311C11.3462 5.93311 11.6343 6.03564 11.8491 6.24072C12.064 6.4458 12.1714 6.70703 12.1714 7.02441C12.1714 7.34668 12.0615 7.61035 11.8418 7.81543C11.627 8.02051 11.3413 8.12305 10.9849 8.12305C10.6284 8.12305 10.3403 8.02051 10.1206 7.81543C9.90576 7.61035 9.79834 7.34668 9.79834 7.02441Z"
        fill={theme.palette.primary.main}
      />
    </SvgIcon>
  );
};

export default NotificationsInformationIcon;
