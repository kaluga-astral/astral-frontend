import React from 'react';
import { SvgIcon } from '@astral/core';

const CheckedRectIcon = props => (
  <SvgIcon viewBox="0 0 20 20" {...props}>
    <g filter="url(#filter0_i)">
      <rect x="1.667" y="1.667" width="16.667" height="16.667" rx="4" />
    </g>
    <path
      d="M9.217 12.5a.356.356 0 0 1-.251-.103L6.76 10.171a.365.365 0 0 1 .01-.5.357.357 0 0 1 .497-.011l1.95 1.966 3.973-4.008a.357.357 0 0 1 .613.156.364.364 0 0 1-.106.355l-4.227 4.268a.356.356 0 0 1-.254.103z"
      fill="#fff"
    />
    <defs>
      <filter
        id="filter0_i"
        x="1.667"
        y="1.667"
        width="16.667"
        height="20.667"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
        <feBlend in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  </SvgIcon>
);

export default CheckedRectIcon;
