import React from 'react';
export const ArrowLeftRound = ({
  color = 'currentColor',
  width = '18px',
  height = '14px',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 18 14.4'
    >
      <path
        data-name='_ionicons_svg_ios-arrow-round-back (2)'
        d='M119.925,160.3a.98.98,0,0,1,.007,1.38l-4.554,4.567h13.754a.975.975,0,0,1,0,1.95H115.379l4.562,4.567a.987.987,0,0,1-.008,1.38.972.972,0,0,1-1.373-.008l-6.182-6.225a1.1,1.1,0,0,1-.2-.307.93.93,0,0,1-.075-.375.977.977,0,0,1,.278-.682l6.182-6.225A.956.956,0,0,1,119.925,160.3Z'
        transform='translate(-112.1 -160.024)'
        fill={color}
      />
    </svg>
  );
};
