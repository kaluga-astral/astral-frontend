import React from 'react';
import { SvgIcon } from '@astral-frontend/core';

const OutgoingInvitationIcon = props => (
  <SvgIcon viewBox="0 0 28 28" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 7.39258C3 3.53711 6.14453 0.392578 10 0.392578C13.8555 0.392578 17 3.53711 17 7.39258C17 9.06504 16.4075 10.6077 15.4222 11.817C13.8982 12.3354 12.5809 13.3008 11.6264 14.5569C11.1015 14.4491 10.5576 14.3926 10 14.3926C5.57031 14.3926 2 17.9629 2 22.3926H0C0 18.2754 2.52734 14.7363 6.09375 13.2051C4.23047 11.9434 3 9.80273 3 7.39258ZM15 7.39258C15 4.61914 12.7734 2.39258 10 2.39258C7.22656 2.39258 5 4.61914 5 7.39258C5 10.166 7.22656 12.3926 10 12.3926C12.7734 12.3926 15 10.166 15 7.39258Z"
      fill="#6746EB"
    />
    <circle
      cx="18"
      cy="19.3926"
      r="7"
      stroke="#6746EB"
      fill="#FFFFFF"
      strokeWidth="2"
    />
    <path
      d="M18 23.3926V15.3926M18 15.3926L21 19.3926M18 15.3926L15 19.3926"
      stroke="#6746EB"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FFFFFF"
    />
  </SvgIcon>
);

export default OutgoingInvitationIcon;
