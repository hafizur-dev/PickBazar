import React from 'react';
export const GooglePlus = ({
  color = 'currentColor',
  width = '17px',
  height = '11px',
}) => {
  return (
    <svg
      id='google-hangouts'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 17.239 11.111'
    >
      <path
        id='Path_1'
        data-name='Path 1'
        d='M5.589,2.02A3.559,3.559,0,0,1,8.417,3.444L9.852,2a5.552,5.552,0,1,0,1.081,5.071,5.385,5.385,0,0,0,.212-1.515V5.05H6.094V7.07H8.771A3.514,3.514,0,0,1,5.589,9.091,3.568,3.568,0,0,1,2.02,5.555,3.568,3.568,0,0,1,5.589,2.02Zm0,0'
        fill={color}
      />
      <path
        id='Path_2'
        data-name='Path 2'
        d='M364.535,90h-2.02v1.515H361v2.02h1.515V95.05h2.02V93.535h1.549v-2.02h-1.549Zm0,0'
        transform='translate(-348.845 -86.97)'
        fill={color}
      />
    </svg>
  );
};
