import React from 'react';
import { SvgIcon } from '@astral-frontend/core';

const IncomingInvitationIcon = props => (
  <SvgIcon viewBox="0 0 28 28" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 7C3 3.14453 6.14453 0 10 0C13.8555 0 17 3.14453 17 7C17 8.67246 16.4075 10.2151 15.4222 11.4244C13.8982 11.9428 12.5809 12.9082 11.6264 14.1643C11.1015 14.0566 10.5576 14 10 14C5.57031 14 2 17.5703 2 22H0C0 17.8828 2.52734 14.3438 6.09375 12.8125C4.23047 11.5508 3 9.41016 3 7ZM15 7C15 4.22656 12.7734 2 10 2C7.22656 2 5 4.22656 5 7C5 9.77344 7.22656 12 10 12C12.7734 12 15 9.77344 15 7Z"
      fill="#6746EB"
    />
    <circle
      cx="18"
      cy="19"
      r="7"
      stroke="#6746EB"
      fill="#FFFFFF"
      strokeWidth="2"
    />
    <path
      d="M18 15L18 23M18 23L15 19M18 23L21 19"
      stroke="#6746EB"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FFFFFF"
    />
  </SvgIcon>
);

export default IncomingInvitationIcon;
