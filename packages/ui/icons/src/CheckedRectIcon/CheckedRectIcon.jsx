import React from 'react';
import { SvgIcon } from '@astral-frontend/core';

const CheckedRectIcon = props => (
  <SvgIcon viewBox="0 0 20 20" {...props}>
    <g filter="url(#filter0_i)">
      <rect
        y="0.392578"
        width="20"
        height="20"
        rx="4"
        fill="white"
        fillOpacity="0.8"
      />
    </g>
    <rect x="0.5" y="0.892578" width="19" height="19" rx="3.5" />
    <defs>
      <filter
        id="filter0_i"
        x="0"
        y="0.392578"
        width="20"
        height="24"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
    <path
      d="M9.06068 13C8.94776 13.0005 8.8392 12.9561 8.75851 12.8764L6.11319 10.2058C5.95737 10.0342 5.96311 9.76928 6.12621 9.60473C6.28931 9.44019 6.55192 9.4344 6.722 9.5916L9.06068 11.951L13.8292 7.14107C13.9363 7.02321 14.0988 6.97411 14.2524 7.01323C14.406 7.05235 14.526 7.17337 14.5647 7.32835C14.6035 7.48334 14.5549 7.64729 14.438 7.75528L9.36553 12.8764C9.28418 12.9568 9.17452 13.0012 9.06068 13Z"
      fill="white"
    />
  </SvgIcon>
);

export default CheckedRectIcon;
