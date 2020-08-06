import styled, { createGlobalStyle } from 'styled-components';
import { get } from 'styled-system';
import css from '@styled-system/css';
// import { themeGet } from '@styled-system/theme-get';
// const TIMEOUT = 400;
// export const themed = (key) => (props) =>
//   css(get(props.theme, `customs.${key}`))(props.theme);
// export const themeGet = (path, fallback = null) => (props) =>
//   get(props.theme, path, fallback);

export const InjectRTL = styled.div`
  ${({ lang }) =>
    (lang === 'ar' || lang === 'he') &&
    `
    font-family: 'Cairo', sans-serif;
    `}
`;

// const heading = {
//   color: 'text',
//   fontFamily: 'heading',
//   lineHeight: 'heading',
//   fontWeight: 'heading',
// };

// export const GlobalStyle = createGlobalStyle`
//   html {
//     box-sizing: border-box;
//   }
//   *, *:before, *:after {
//     box-sizing: inherit;
//   }
//   body{
//     margin: 0;
//     font-family: ${themeGet('fontFamily.0', 'sans-serif')};
//   }

//   h1,h2,h3,h4,h5,h6  {
//     font-family: ${themeGet('fontFamily.1', 'sans-serif')};
//     margin: 0;
//   }

//   p,a,span,button,li,div  {
//     font-family: ${themeGet('fontFamily.0', 'sans-serif')};
//     margin: 0;
//   }
//   ul{
//     margin: 0;
//     padding: 0;
//   }
//   li{
//     list-style: none;
//   }

//   a{
//     text-decoration: none;
//   }

//   .quick-view-overlay{
//     background-color: rgba(0,0,0,.5)
//   }

//   .add-address-modal,
//   .add-contact-modal{
//     box-shadow: 0 10px 40px rgba(0,0,0,0.16);
//     border-radius: 3px !important;
//     .innerRndComponent{
//       width: 100%;
//       padding: 30px;
//       height: auto;
//       background-color: #f7f8f9;
//       border: 0;
//       box-sizing: border-box;
//     }
//   }

//   .search-modal-mobile{
//     transform: none!important;
//     max-width: none!important;
//     max-height: none!important;
//     top: 0!important;
//     left: 0!important;
//     background: transparent!important;;
//     border-radius: 0!important;
//   }

//   .reuseModalCloseBtn{
//     right: 10px!important;
//     background-color: #ffffff!important;
//     color: #222222!important;
//     border-radius: 15px!important;
//     padding: 0 9px!important;
//     box-shadow: 0 2px 8px rgba(0,0,0,0.4);
//   }

//   .page-transition-enter {
//     opacity: 0;
//     transform: translate3d(0, 20px, 0);
//   }
//   .page-transition-enter-active {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//     transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
//   }
//   .page-transition-exit {
//     opacity: 1;
//   }
//   .page-transition-exit-active {
//     opacity: 0;
//     transition: opacity ${TIMEOUT}ms;
//   }
//   .loading-indicator-appear,
//   .loading-indicator-enter {
//     opacity: 0;
//   }
//   .loading-indicator-appear-active,
//   .loading-indicator-enter-active {
//     opacity: 1;
//     transition: opacity ${TIMEOUT}ms;
//   }

//   .image-item{
//     padding: 0 15px;
//   }

//   @media (max-width: 1199px) and (min-width: 991px) {
//     .image-item{
//       padding-left: 10px;
//       padding-right: 10px;
//     }
//   }
//   @media (max-width: 768px) {
//     .image-item{
//       padding-left: 7.5px;
//       padding-right: 7.5px;
//     }
//   }

//   .rc-table-fixed-header .rc-table-scroll .rc-table-header{
//     margin-bottom: 0 !important;
//     padding-bottom: 0 !important;

//     th {
//       padding: 8px 20px;
//       }
//   }

//   .drawer-content-wrapper{
//     *:focus {
//       outline: none;
//     }
//   }

//   .rc-table-content{
//     border: 0;
//   }

// `;
export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    body: {
      margin: 0,
      fontFamily: 'body',
      fontWeight: 'regular',
      fontSize: 'base',
      lineHeight: '1.5',
      backgroundColor: 'white',
      transition: get(theme, 'customs.transition'),
    },
    h1: {
      fontFamily: 'heading',
      fontSize: '5xl',
      margin: 0,
    },
    h2: {
      fontFamily: 'heading',
      fontSize: '3xl',
      margin: 0,
    },
    h3: {
      fontFamily: 'heading',
      fontSize: '2xl',
      margin: 0,
    },
    h4: {
      fontFamily: 'heading',
      fontSize: 'xl',
      margin: 0,
    },
    h5: {
      fontFamily: 'heading',
      fontSize: 'md',
      margin: 0,
    },
    h6: {
      fontFamily: 'heading',
      fontSize: 'base',
      margin: 0,
    },
    'p,span,button,li,div': {
      fontFamily: 'body',
      margin: 0,
    },
    a: {
      fontFamily: 'body',
      textDecoration: 'none',
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
    '.quick-view-overlay': {
      backgroundColor: 'rgba(0,0,0,.5)',
    },

    '.add-address-modal,.add-contact-modal': {
      boxShadow: '0 10px 40px rgba(0,0,0,0.16)',
      borderRadius: '3px !important',
      '.innerRndComponent': {
        width: '100%',
        padding: '30px',
        height: 'auto',
        backgroundColor: '#f7f8f9',
        border: 0,
        boxSizing: 'border-box',
      },
    },

    '.search-modal-mobile': {
      transform: 'none!important',
      maxWidth: 'none!important',
      maxHeight: 'none!important',
      top: '0!important',
      left: '0!important',
      background: 'transparent!important',
      borderRadius: '0!important',
    },

    '.reuseModalCloseBtn': {
      right: '10px!important',
      backgroundColor: '#ffffff!important',
      color: '#222222!important',
      borderRadius: '15px!important',
      padding: '0 9px!important',
      boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    },

    '.image-item': {
      padding: '0 15px',
    },

    '@media (max-width: 1199px) and (min-width: 991px)': {
      '.image-item': {
        paddingLeft: '10px',
        paddingRight: '10px',
      },
    },

    '@media (max-width: 768px)': {
      '.image-item': {
        paddingLeft: '7.5px',
        paddingRight: '7.5px',
      },
    },

    '.rc-table-fixed-header .rc-table-scroll .rc-table-header': {
      marginBottom: '0 !important',
      paddingBottom: '0 !important',

      th: {
        padding: '8px 20px',
      },
    },

    '.drawer-content-wrapper': {
      '*:focus': {
        outline: 'none',
      },
    },

    '.rc-table-content': {
      border: 0,
    },
    //@ts-ignore
    ...theme.globals,
  })
);
