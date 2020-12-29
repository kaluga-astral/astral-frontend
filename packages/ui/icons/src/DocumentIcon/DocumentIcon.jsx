import React from 'react';
import { SvgIcon } from '@astral-frontend/core';

// TODO: убрать fill="#6746EB"
const DocumentIcon = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      d="M6 2C4.90575 2 4 2.90575 4 4V20C4 21.0943 4.90575 22 6 22H18C19.0943 22 20 21.0943 20 20V8L14 2H6ZM6 4H13V9H18V20H6V4ZM8 12V14H16V12H8ZM8 16V18H16V16H8Z"
      fill="#6746EB"
    />
  </SvgIcon>
);

export default DocumentIcon;
