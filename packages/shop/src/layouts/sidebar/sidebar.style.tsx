import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const Fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PopoverWrapper = styled.div`
  @media (min-width: 991px) {
    display: none;
  }

  .popover-handler {
    display: block;
    padding: 15px;
    cursor: pointer;
  }
  .popover-content {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    border-radius: 0;
    box-shadow: none;
    padding: 25px 35px;
    border-top: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};

    &::before {
      display: none;
    }
    .category-dropdown {
      animation: ${Fade} 0.6s;
    }
    @media (max-width: 990px) {
      padding: 25px;
    }
  }
`;

export const RequestMedicine = styled.span`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 50px;
  background-color: ${themeGet('colors.primary.regular', '#009e7f')};
  font-size: calc(${themeGet('fontSizes.base', '15px')} - 1px);
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  cursor: pointer;

  @media (max-width: 990px) {
    justify-content: center;
    padding: 0;
    border-radius: ${themeGet('radii.base', '6px')};
  }
`;

export const SidebarWrapper = styled.div`
  padding: 45px 0px;
  padding-top: 35px;
  padding-right: 0;

  @media (max-width: 1199px) {
    padding: 40px 0px;
    padding-right: 0;
  }

  @media (max-width: 990px) {
    display: none;
    padding: 0;
  }
`;

export const CategoryWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TreeWrapper = styled.div`
  padding-left: 50px;
  padding-right: 20px;
`;

export const PopoverHandler = styled.div`
  font-size: calc(${themeGet('fontSizes.base', '15px')} - 1px);
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    &:first-child {
      flex-grow: 1;
      svg {
        margin-right: 10px;
      }
    }
    &:last-child {
      color: ${themeGet('colors.text.regular', '#77798c')};
    }
  }
`;

export const Loading = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${themeGet('fontSizes.base', '15px')} - 1px);
  color: ${themeGet('colors.text.bold', '#0D1136')};
`;
