import React from 'react';
export const Snacks = ({
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
          data-name='Path 36'
          d='M2.109 5.274H12.66a1.055 1.055 0 000-2.11h-.1a1.67 1.67 0 00-1.5-1.054 2.626 2.626 0 00-1.854-1.044 2.1 2.1 0 00-3.653 0 2.626 2.626 0 00-1.85 1.045h-.011a1.577 1.577 0 00-1.481 1.055h-.1a1.055 1.055 0 100 2.11z'
        />
        <path
          data-name='Path 37'
          d='M7.956 15.891l.863-9.562H5.946l.862 9.562z'
        />
        <path
          data-name='Path 38'
          d='M2.884 12.881a2.118 2.118 0 011.253 1.378 2.626 2.626 0 011.07 1.633h.542L4.887 6.33H2.164z'
        />
        <path
          data-name='Path 39'
          d='M12.601 6.329H9.877l-.862 9.562h2.059a.527.527 0 00.524-.469z'
        />
        <path
          data-name='Path 40'
          d='M1.054 16.946a.876.876 0 00.091-.019 1.577 1.577 0 102-2c0-.031.019-.058.019-.091a1.055 1.055 0 00-2.11 0 1.055 1.055 0 100 2.109z'
        />
      </g>
    </svg>
  );
};
