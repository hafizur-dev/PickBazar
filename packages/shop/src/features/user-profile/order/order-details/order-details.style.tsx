import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const OrderDetailsWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${themeGet('colors.white', '#ffffff')};
`;

export const DeliveryInfo = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  border-bottom: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
`;

export const DeliveryAddress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  padding: 20px;

  h3 {
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.base', '15')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    margin-bottom: 10px;
  }
`;

export const Address = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  line-height: 1.5;
`;

export const CostCalculation = styled.div`
  width: 235px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 20px;

  @media only screen and (min-width: 768px) and (max-width: 990px) {
    width: 220px;
  }
`;

export const PriceRow = styled.div`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.regular', '#77798c')};
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }

  &.grandTotal {
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
  }
`;

export const Price = styled.div`
  color: ${themeGet('colors.text.bold', '#0D1136')};
`;

export const HeadingSection = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Title = styled('h3')`
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
`;

export const ProgressSection = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProgressWrapper = styled('div')`
  width: 100%;
  display: flex;
  padding: 30px 25px;
  border-bottom: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
`;

export const OrderTable = styled('table')`
  && {
    border-collapse: collapse;

    thead {
      th {
        padding: 8px 20px;
        font-family: ${themeGet('fonts.body', 'Lato')};
        font-size: ${themeGet('fontSizes.sm', '13')}px;
        font-weight: ${themeGet('fontWeights.bold', '700')};
        color: ${themeGet('colors.text.bold', '#0D1136')};
        border: none;

        &:first-child {
          padding-left: 110px;
          text-align: left;
        }
      }
    }

    tr {
      &:hover {
        background-color: inherit;
      }

      td {
        padding: 20px;
        font-family: ${themeGet('fonts.body', 'Lato')};
        font-size: ${themeGet('fontSizes.base', '15')}px;
        font-weight: ${themeGet('fontWeights.regular', '400')};
        color: ${themeGet('colors.text.bold', '#0D1136')};
        border-bottom: 0;
        border: none;
      }
    }
  }
`;

export const OrderTableWrapper = styled.div`
  .rc-table-content {
    border: 0;
  }
`;
