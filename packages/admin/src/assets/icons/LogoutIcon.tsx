import React from 'react';
export const LogoutIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15.999'
      height='13'
      viewBox='0 0 15.999 13'
    >
      <defs>
        <filter
          x='4.583'
          y='1.792'
          width='11.416'
          height='10.333'
          filterUnits='userSpaceOnUse'
        >
          {/* <feOffset dy="1" input="SourceAlpha" /> */}
          <feGaussianBlur stdDeviation='1' result='blur' />
          <feFlood floodOpacity='0.161' />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g data-name='007-logout' transform='translate(0)'>
        <g data-name='Group 1075'>
          <g data-name='Group 1074' transform='translate(0)'>
            <g transform='matrix(1, 0, 0, 1, 0, 0)' filter='url(#Path_319)'>
              <path
                data-name='Path 319'
                d='M304.055,151.3a.547.547,0,0,0-.118-.177l-1.624-1.624a.542.542,0,0,0-.766.766l.7.7h-3.026a.542.542,0,1,0,0,1.083h3.026l-.7.7a.542.542,0,1,0,.766.766l1.624-1.624a.536.536,0,0,0,.118-.177A.542.542,0,0,0,304.055,151.3Z'
                transform='translate(-291.1 -145.55)'
                fill='currentColor'
              />
            </g>
            <path
              data-name='Path 320'
              d='M9.222,7.583a.542.542,0,0,0-.542.542v2.708H6.514V2.167a.542.542,0,0,0-.386-.519L4.247,1.083H8.681V3.792a.542.542,0,0,0,1.083,0V.542A.542.542,0,0,0,9.222,0H.556A.483.483,0,0,0,.5.01.535.535,0,0,0,.27.09C.258.1.244.1.232.107S.226.116.222.12A.537.537,0,0,0,.078.291.442.442,0,0,0,.063.336.514.514,0,0,0,.02.463a.337.337,0,0,0,0,.047C.021.521.014.531.014.542V11.375a.541.541,0,0,0,.435.531l5.417,1.083A.5.5,0,0,0,5.972,13a.542.542,0,0,0,.542-.542v-.542H9.222a.542.542,0,0,0,.542-.542V8.125A.542.542,0,0,0,9.222,7.583Z'
              transform='translate(-0.014)'
              fill='currentColor'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
