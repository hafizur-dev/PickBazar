import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import {
  DeliveryInfo as DeliveryInfos,
  DeliveryAddress as DeliveryAddresses,
  Address as Addresses,
  CostCalculation as CostCalculations,
  PriceRow as PriceRows,
  Price as Prices,
  ProgressWrapper as ProgressWrappers,
  OrderTable as OrderTables,
} from '../order-details/order-details.style';

export const Address = styled(Addresses)``;
export const PriceRow = styled(PriceRows)``;
export const Price = styled(Prices)``;
export const OrderTable = styled(OrderTables)``;

export const DeliveryInfo = styled(DeliveryInfos)`
  flex-direction: column;
`;

export const DeliveryAddress = styled(DeliveryAddresses)`
  border-bottom: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  border-right: 0;
`;

export const CostCalculation = styled(CostCalculations)`
  width: 100%;
`;

export const ProgressWrapper = styled(ProgressWrappers)`
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const OrderListHeader = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
`;

export const TrackID = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};

  span {
    font-weight: ${themeGet('fontWeights.regular', '400')};
  }
`;

export const Status = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.blue.regular', '#2e70fa')};
  line-height: 1;
  background-color: rgba(46, 112, 250, 0.1);
  padding: 10px;
  border-radius: ${themeGet('radii.base', '6px')};
`;

export const OrderMeta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Meta = styled.div`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;

  @media (max-width: 767px) {
    font-size: ${themeGet('fontSizes.base', '15')}px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.price {
    font-weight: ${themeGet('fontWeights.bold', '700')};
  }
`;

// for mobile

export const OrderDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardWrapper = styled.div`
  width: 100%;
`;

export const SingleOrderList = styled.div`
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  border-radius: ${themeGet('radii.base', '6px')};
  overflow: hidden;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  flex-shrink: 0;
  border: 2px solid transparent;

  &:last-child {
    margin-bottom: 0;
  }

  &.active {
    border: 2px solid ${themeGet('colors.primary.regular', '#009e7f')};
  }
`;

export const OrderTableMobile = styled.div`
  .rc-table-header,
  .rc-table-body,
  .rc-table th,
  .rc-table td {
    border: 0;
  }

  .rc-table-content {
    border: 0;
  }
`;
