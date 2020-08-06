import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StoreNavWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  z-index: 1;
  position: relative;
  background-color: ${themeGet('colors.white', '#ffffff')};
  height: 55px;
`;

export const StoreNavLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  height: 80px;
  overflow-y: hidden;
  overflow-x: auto;
  padding-top: 15px;
  padding-bottom: 25px;
  padding-left: 15px;
  padding-right: 15px;
  .store-nav-link {
    margin-right: 10px;

    a {
      display: flex;
      align-items: center;
      font-size: calc(${themeGet('fontSizes.base', '15px')} - 1px);
      font-weight: ${themeGet('fontWeights.bold', '700')};
      color: ${themeGet('colors.text.regular', '#77798C')};
      padding: 5px 9px;
      border-radius: ${themeGet('radii.base', '6px')};
      line-height: 1.2;
      white-space: nowrap;

      svg {
        margin-right: 5px;
        flex-shrink: 0;
      }

      &.current-page {
        color: ${themeGet('colors.primary.regular', '#009E7F')};
        background-color: ${themeGet('colors.gray.100', '#f9f9f9')};
      }
    }
  }
`;

export default StoreNavWrapper;
