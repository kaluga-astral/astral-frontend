import React from 'react';
import { SvgIcon } from '@astral-frontend/core';

const UnchekedCircleIcon = props => (
  <SvgIcon viewBox="0 0 20 20" {...props}>
    <path d="M10 20C4.5 20 0 15.5 0 10S4.5 0 10 0s10 4.5 10 10-4.5 10-10 10zm0-19c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z" />
    <path d="M10 17c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7z" />
  </SvgIcon>
);

export default UnchekedCircleIcon;
