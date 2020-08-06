import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const DesktopView = styled.div`
  display: none;
  @media only screen and (min-width: 990px) {
    display: flex;
  }
`;

const MobileView = styled.div`
  display: none;
  @media only screen and (max-width: 989px) {
    width: 100%;
    display: flex;
  }
`;

const OrderBox = styled.div`
  width: calc(100% - 330px);
  display: flex;
  align-items: flex-start;

  @media only screen and (max-width: 1199px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const OrderListWrapper = styled.div`
  width: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  flex-shrink: 0;
  margin-right: 30px;
  overflow: hidden;

  @media only screen and (max-width: 1199px) {
    width: 310px;
    margin-right: 20px;
  }
`;

const OrderList = styled.div`
  width: 100%;
  padding: 0 20px 20px;

  @media (max-width: 767px) {
    padding: 0;
  }

  .rc-collapse {
    background-color: transparent;
    border-radius: 0;
    border: 0;

    > .rc-collapse-item {
      margin-bottom: 15px;
      background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
      border-radius: ${themeGet('radii.base', '6px')};
      overflow: hidden;
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      flex-shrink: 0;
      border: 1px solid transparent;

      &.rc-collapse-item-active {
        background-color: ${themeGet('colors.white', '#ffffff')};
        border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
      }

      > .rc-collapse-header {
        padding: 0;
        outline: 0;
      }

      .rc-collapse-content {
        padding: 0px;
        > .rc-collapse-content-box {
          box-sizing: border-box;
          padding: 0px;
          margin: 0;
        }
      }
    }
  }
`;

const OrderDetailsWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 190px);
  display: flex;
  flex-direction: column;
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
`;

const Title = styled.h3`
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin: 25px 0;
`;

// Invoice Table design
const ImageWrapper = styled.span`
  width: 75px;
  height: 75px;
  display: flex;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ItemWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const ItemDetails = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  overflow: hidden;
`;

const ItemName = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin-bottom: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
`;
const ItemSize = styled('span')`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  margin-bottom: 5px;
`;
const ItemPrice = styled('span')`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.primary.regular', '#009e7f')};
`;

const TotalPrice = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
`;

const NoOrderFound = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  DesktopView,
  MobileView,
  OrderBox,
  OrderListWrapper,
  OrderList,
  OrderDetailsWrapper,
  Title,
  ImageWrapper,
  ItemWrapper,
  ItemDetails,
  ItemName,
  ItemSize,
  ItemPrice,
  TotalPrice,
  NoOrderFound,
};
