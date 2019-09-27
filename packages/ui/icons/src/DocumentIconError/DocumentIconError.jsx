import React from 'react';
import { SvgIcon } from '@astral-frontend/components';

const DocumentIconError = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M13 4H6V20H18V9H20V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H13V4Z" />
    <path d="M13 2H14L17 5L20 8V9H13V2Z" fill="#F24646" />
    <rect x="9" y="15.9497" width="7" height="2" transform="rotate(-45 9 15.9497)" />
    <rect x="13.9502" y="17.364" width="7" height="2" transform="rotate(-135 13.9502 17.364)" />
  </SvgIcon>
);

export default DocumentIconError;
