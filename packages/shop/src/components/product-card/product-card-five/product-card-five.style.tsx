import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Button } from 'components/button/button';
import { Counter as Counters } from 'components/counter/counter';

export const CardWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: auto;
  height: auto;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  background-color: ${themeGet('colors.white', '#ffffff')};

  img {
    max-width: 100%;
    max-height: 100%;
    display: inline-block;
  }

  &.overlay {
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
`;

export const InfoWrapper = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

export const Title = styled.h3`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  margin: 0 0 4px 0;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: 14px;
    margin: 0 0 5px 0;
  }
`;

export const Unit = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};

  @media (max-width: 767px) {
    font-size: ${themeGet('fontSizes.xs', '12')}px;
  }
`;

export const Price = styled.span`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin-bottom: 10px;

  @media (max-width: 767px) {
    font-size: calc(${themeGet('fontSizes.base', '15')}px - 1px);
  }
`;

export const CartButton = styled(Button)`
  background-color: ${themeGet('colors.primary.regular', '#009E7F')};
  border: 0;
  color: ${themeGet('colors.white', '#ffffff')};
  border-radius: ${themeGet('radii.big', '18px')};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding-left: 0;
  padding-right: 0;
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  position: absolute;
  bottom: 20px;
  right: 15px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  z-index: 1;

  @media (max-width: 767px) {
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 50%;
  }
  .btn-text {
    padding: 0 0 0 6px;
    @media (max-width: 767px) {
      display: none;
    }
  }
  &:hover {
    background-color: ${themeGet('colors.primary.regular', '#009E7F')};
  }
  svg {
    fill: currentColor;
  }
`;

export const Counter = styled(Counters)`
  position: absolute;
  width: calc(100% - 60px);
  height: 36px;
  bottom: 30px;
  left: 30px;
  z-index: 1;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
