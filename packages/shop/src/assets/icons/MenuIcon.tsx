import React from 'react';
export const MenuIcon = ({
  color = 'currentColor',
  width = '26px',
  height = '18px',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 25.5 18'
    >
      <g transform='translate(-2 -6)'>
        <path
          data-name='Path 216'
          d='M26.589,6H2.911A.842.842,0,0,0,2,6.75a.842.842,0,0,0,.911.75H26.589a.842.842,0,0,0,.911-.75A.842.842,0,0,0,26.589,6Z'
          fill={color}
        />
        <path
          data-name='Path 217'
          d='M2.75,16.5H12.5a.75.75,0,0,0,0-1.5H2.75a.75.75,0,0,0,0,1.5Z'
          transform='translate(0 -0.75)'
          fill={color}
        />
        <path
          data-name='Path 218'
          d='M23.562,24H2.938a.769.769,0,1,0,0,1.5H23.562a.769.769,0,1,0,0-1.5Z'
          transform='translate(0 -1.5)'
          fill={color}
        />
      </g>
    </svg>
  );
};
