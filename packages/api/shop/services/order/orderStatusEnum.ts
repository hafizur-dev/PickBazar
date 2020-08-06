import { registerEnumType } from 'type-graphql';

export enum OrderStatusEnum {
  RECEIVED = 'Received',
  PROCESSING = 'Processing',
  ON_THE_WAY = 'On the way',
  DELIVERED = 'Delivered',
}

registerEnumType(OrderStatusEnum, {
  name: 'Product Type',
  description: 'These are the supported enums for order status',
});
