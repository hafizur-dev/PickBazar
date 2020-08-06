import React from 'react';
export const PlusOutline = ({
  color = 'currentColor',
  width = '16px',
  height = '16px',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'
    >
      <g
        id='Group_3371'
        data-name='Group 3371'
        transform='translate(-1539 -2317.5)'
      >
        <rect
          id='Rectangle_680'
          data-name='Rectangle 680'
          width='16'
          height='1.5'
          transform='translate(1539 2325)'
          fill={color}
        />
        <rect
          id='Rectangle_681'
          data-name='Rectangle 681'
          width='16'
          height='1.5'
          transform='translate(1547.5 2317.5) rotate(90)'
          fill={color}
        />
      </g>
    </svg>
  );
};
