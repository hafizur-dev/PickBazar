import React from 'react';
// SVG plus icon
export const Plus = ({
  color = 'currentColor',
  width = '12px',
  height = '12px',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 12 12"
    >
      <g
        id="Group_3351"
        data-name="Group 3351"
        transform="translate(-1367 -190)"
      >
        <rect
          data-name="Rectangle 520"
          width="12"
          height="2"
          rx="1"
          transform="translate(1367 195)"
          fill={color}
        />
        <rect
          data-name="Rectangle 521"
          width="12"
          height="2"
          rx="1"
          transform="translate(1374 190) rotate(90)"
          fill={color}
        />
      </g>
    </svg>
  );
};

// SVG minus icon
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
