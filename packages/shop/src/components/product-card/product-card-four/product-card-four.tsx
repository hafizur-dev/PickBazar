// product card for food
import React from 'react';
import Image from 'components/image/image';
import { CURRENCY } from 'utils/constant';
import {
  FoodCardWrapper,
  FoodImageWrapper,
  ProductInfo,
  Category,
  Duration,
  ProductMeta,
  DeliveryOpt,
  DiscountPercent,
} from '../product-card.style';
import { FormattedMessage } from 'react-intl';

type CardProps = {
  name: string;
  image: any;
  restaurantType: string;
  delivery?: string;
  isFree?: boolean;
  duration?: string;
  discountInPercent?: number;
  data: any;
  onClick?: (e: any) => void;
};

const ProductCard: React.FC<CardProps> = ({
  name,
  image,
  restaurantType,
  delivery,
  isFree,
  duration,
  discountInPercent,
  data,
  onClick,
  ...props
}) => {
  return (
    <FoodCardWrapper onClick={onClick} className="product-card">
      <FoodImageWrapper>
        <Image
          url={image}
          className="product-image"
          style={{ position: 'relative' }}
          alt={name}
        />
        {discountInPercent && (
          <DiscountPercent>{discountInPercent}%</DiscountPercent>
        )}
      </FoodImageWrapper>
      <ProductInfo
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <h3 className="product-title">{name}</h3>
        <Category style={{ marginBottom: 20, display: 'inline-block' }}>
          {restaurantType}
        </Category>
        <ProductMeta style={{ marginTop: 'auto' }}>
          <DeliveryOpt>
            {!isFree && CURRENCY}
            {delivery}{' '}
            <FormattedMessage id="deliveryText" defaultMessage="Delivery" />
          </DeliveryOpt>
          <Duration>{duration}</Duration>
        </ProductMeta>
      </ProductInfo>
    </FoodCardWrapper>
  );
};

export default ProductCard;
