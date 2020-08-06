import React from 'react';
export const Tops = ({
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
      <g fill={color}>
        <path
          data-name='Path 104'
          d='M6.994 2.83L5.928 5.991a.315.315 0 01-.6 0L4.273 2.83a2.4 2.4 0 00-2.909-.026L0 3.822l.087.329a32.647 32.647 0 01.909 11.921L.79 18h9.7l-.215-1.909a32.667 32.667 0 01.912-11.96l.083-.31-1.366-1.013a2.4 2.4 0 00-2.909.026zm0 0'
        />
        <path
          data-name='Path 105'
          d='M.549 2.843l.62-.114L.714.261a.315.315 0 00-.62.114zm0 0'
        />
        <path
          data-name='Path 106'
          d='M10.978.369a.316.316 0 00-.622-.108L9.966 2.6l.622.108zm0 0'
        />
      </g>
    </svg>
  );
};
