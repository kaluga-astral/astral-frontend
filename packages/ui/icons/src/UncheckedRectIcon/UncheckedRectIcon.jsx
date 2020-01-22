import React from 'react';
import { SvgIcon } from '@astral-frontend/core';

const UnchekedRectIcon = props => (
  <SvgIcon viewBox="0 0 22 22" {...props}>
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
    <rect
      x="0.5"
      y="0.892578"
      width="19"
      height="19"
      rx="3.5"
      stroke="#DDE2E8"
    />
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
  </SvgIcon>
);

export default UnchekedRectIcon;
