import React from 'react';

export const Minus = ({
  color = 'currentColor',
  width = '12px',
  height = '2px',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 2"
    >
      <rect
        data-name="Rectangle 522"
        width="12"
        height="2"
        rx="1"
        fill={color}
      />
    </svg>
  );
};
