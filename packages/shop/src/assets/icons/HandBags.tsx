import React from 'react';
export const HandBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 18 18'
    >
      <g data-name='Group 11'>
        <g
          data-name='Group 10'
          fill={color}
          stroke='#fff'
          strokeMiterlimit='10'
          strokeWidth='.091'
        >
          <path
            data-name='Path 45'
            d='M17.954 7.253v8.585a1.791 1.791 0 01-1.791 1.791H1.836a1.791 1.791 0 01-1.791-1.791V7.253c0-.988 17.909-.988 17.909 0z'
          />
          <path data-name='Rectangle 36' d='M.102 8.77h17.795v.913H.102z' />
          <path
            data-name='Path 46'
            d='M4.793 7.253C4.976 4.061 7.113.614 9 .614c2.41 0 4.049 3.84 4.207 6.639h.572C13.618 4.168 11.791.044 8.999.044c-1.131 0-2.338.922-3.312 2.529a10.463 10.463 0 00-1.466 4.68z'
          />
        </g>
      </g>
    </svg>
  );
};
