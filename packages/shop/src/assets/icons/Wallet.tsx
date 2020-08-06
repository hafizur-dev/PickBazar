import React from 'react';
export const Wallet = ({
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
      <g data-name='Group 9'>
        <g data-name='Group 8'>
          <path
            data-name='Path 42'
            d='M12.362 1.129a1.415 1.415 0 00-1.672-1.1L1.428 1.942h11.1z'
            fill={color}
          />
        </g>
        <path
          data-name='Path 43'
          d='M11.579 11.242v-2.2a1.822 1.822 0 011.82-1.82h2.784v-2.78a1.415 1.415 0 00-1.415-1.415H1.415A1.415 1.415 0 000 4.442v11.4a1.415 1.415 0 001.415 1.415h13.354a1.415 1.415 0 001.415-1.415v-2.776h-2.785a1.822 1.822 0 01-1.82-1.82z'
          fill={color}
        />
        <path
          data-name='Path 44'
          d='M16.989 8.03h-3.59a1.011 1.011 0 00-1.01 1.01v2.2a1.012 1.012 0 001.01 1.01h3.59a1.012 1.012 0 001.01-1.01v-2.2a1.012 1.012 0 00-1.01-1.01zm-2.8 3.128a1.006 1.006 0 111.006-1.006 1.006 1.006 0 01-1.006 1.006z'
          fill={color}
        />
      </g>
    </svg>
  );
};
