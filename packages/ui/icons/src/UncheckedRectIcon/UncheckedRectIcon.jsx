import React from 'react';
import { SvgIcon } from '@astral-frontend/core';

const UnchekedRectIcon = props => (
  <SvgIcon viewBox="0 0 20 20" {...props}>
    <g filter="url(#filter0_i)">
      <rect
        x="1.667"
        y="1.667"
        width="16.667"
        height="16.667"
        rx="4"
        fill="#fff"
        fillOpacity=".8"
      />
    </g>
    <rect
      x="2.167"
      y="2.167"
      width="15.667"
      height="15.667"
      rx="3.5"
      stroke="#DDE2E8"
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

export default UnchekedRectIcon;
