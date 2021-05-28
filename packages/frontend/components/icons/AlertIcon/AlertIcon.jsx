import React from 'react';
import { SvgIcon } from '@material-ui/core';

const AlertIcon = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="12" fill="#6746EB" />
    <rect x="11" y="16" width="2" height="2" fill="white" />
    <rect x="11" y="6" width="2" height="8" fill="white" />
  </SvgIcon>
);

export default AlertIcon;
