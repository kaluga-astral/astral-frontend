import React from 'react';

const Loader = ({ size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="currentColor" {...props}>
    <g transform="translate(32 32)" strokeWidth={0}>
      <circle r={5} cx={24}>
        <animate
          attributeName="fill-opacity"
          dur="750ms"
          values="1;.9;.85;.7;.4;.3;.3;.3;1"
          repeatCount="indefinite"
        />
      </circle>
      <circle r={5} cx={16.971} cy={16.971}>
        <animate
          attributeName="fill-opacity"
          dur="750ms"
          values=".3;1;.9;.85;.7;.4;.3;.3;.3"
          repeatCount="indefinite"
        />
      </circle>
      <circle r={5} cy={24}>
        <animate
          attributeName="fill-opacity"
          dur="750ms"
          values=".3;.3;1;.9;.85;.7;.4;.3;.3"
          repeatCount="indefinite"
        />
      </circle>
      <circle r={5} cx={-16.971} cy={16.971}>
        <animate
          attributeName="fill-opacity"
          dur="750ms"
          values=".3;.3;.3;1;.9;.85;.7;.4;.3"
          repeatCount="indefinite"
        />
      </circle>
      <circle r={5} cx={-24}>
        <animate
          attributeName="fill-opacity"
          dur="750ms"
          values=".4;.3;.3;.3;1;.9;.85;.7;.4"
          repeatCount="indefinite"
        />
      </circle>
      <circle r={5} cx={-16.971} cy={-16.971}>
        <animate
          attributeName="fill-opacity"
          dur="750ms"
          values=".7;.4;.3;.3;.3;1;.9;.85;.7"
          repeatCount="indefinite"
        />
      </circle>
      <circle r={5} cy={-24}>
        <animate
          attributeName="fill-opacity"
          dur="750ms"
          values=".85;.7;.4;.3;.3;.3;1;.9;.85"
          repeatCount="indefinite"
        />
      </circle>
      <circle r={5} cx={16.971} cy={-16.971}>
        <animate
          attributeName="fill-opacity"
          dur="750ms"
          values=".9;.85;.7;.4;.3;.3;.3;1;.9"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

Loader.defaultProps = {
  size: 40,
};

export default Loader;
