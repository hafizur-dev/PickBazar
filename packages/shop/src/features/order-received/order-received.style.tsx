import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

type TextProps = {
  bold?: any;
};

const OrderReceivedWrapper = styled.div`
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  position: relative;
  padding: 100px 0 60px 0;
  min-height: 100vh;
`;

export const OrderReceivedContainer = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  padding: 60px;
  border-radius: ${themeGet('radii.base', '6px')};
  overflow: hidden;
  position: relative;
  width: calc(100% - 30px);
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 991px) {
    width: 870px;
  }
  @media (max-width: 990px) {
    padding: 50px 45px;
  }
  @media (max-width: 767px) {
    padding: 50px 25px;
  }

  .home-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.regular', '400')};
    color: ${themeGet('colors.text.regular', '#77798c')};
    padding: 5px 15px;
    height: 36px;
    border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
    border-radius: ${themeGet('radii.base', '6px')};
    position: absolute;
    top: 15px;
    right: 15px;
    transition: 0.15s ease-in-out;
    @media (max-width: 767px) {
      font-size: ${themeGet('fontSizes.sm', '13')}px;
      height: 34px;
      padding: 5px 12px;
    }

    &:hover {
      background-color: ${themeGet('colors.primary.regular', '#009e7f')};
      border-color: ${themeGet('colors.primary.regular', '#009e7f')};
      color: ${themeGet('colors.white', '#ffffff')};
    }
  }
`;

export const OrderInfo = styled.div`
  margin-bottom: 60px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const OrderDetails = styled.div`
  margin-bottom: 60px;
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }
`;

export const TotalAmount = styled.div``;

export const BlockTitle = styled.h2`
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1;
  margin-bottom: 32px;
  @media (max-width: 767px) {
    font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
    margin-bottom: 25px;
  }
`;

export const Text = styled.p<TextProps>`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  color: ${themeGet('colors.text.bold', '#0D1136')};
  font-weight: ${(props) =>
    props.bold
      ? themeGet('fontWeights.bold', '700')
      : themeGet('fontWeights.regular', '400')};
  line-height: 1.2;
  display: block;
  margin: 0;

  &:last-child {
    color: ${themeGet('colors.text.medium', '#424561')};
  }
`;

export const InfoBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const InfoBlock = styled.div`
  flex-grow: 1;
  padding: 0 15px;
  border-left: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  @media (max-width: 767px) {
    max-width: 100%;
    flex: 0 0 100%;
    margin-bottom: 20px;
    padding: 0;
    border: 0;
  }

  &:first-child {
    padding-left: 0;
    border-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }

  .title {
    margin-bottom: 10px;
  }
`;

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ListTitle = styled.div`
  flex-basis: 210px;
  max-width: 210px;
  flex-shrink: 0;
  position: relative;
  @media (max-width: 767px) {
    flex-basis: 105px;
    max-width: 105px;
  }
  &:after {
    content: ':';
    position: absolute;
    top: -1px;
    right: -2px;
    line-height: 1;
  }
`;

export const ListDes = styled.div`
  padding-left: 90px;
  @media (max-width: 767px) {
    padding-left: 20px;
  }
`;

export default OrderReceivedWrapper;
