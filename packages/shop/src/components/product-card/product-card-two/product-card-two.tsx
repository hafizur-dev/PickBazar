// product card for book
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'components/image/image';
import {
  BookCardWrapper,
  BookImageWrapper,
  BookInfo,
  ProductName,
  AuthorInfo,
  DiscountPercent,
} from '../product-card.style';

type ProductCardProps = {
  title: string;
  image: any;
  name?: string;
  discountInPercent?: number;
  data: any;
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  increment?: (e: any) => void;
  decrement?: (e: any) => void;
  cartProducts?: any;
  addToCart?: any;
  updateCart?: any;
  value?: any;
  deviceType?: any;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  name,
  discountInPercent,
  onChange,
  increment,
  decrement,
  data,
  deviceType,
  onClick,
  ...props
}) => {
  return (
    <BookCardWrapper onClick={onClick} className="book-card">
      <BookImageWrapper>
        <Image
          url={image}
          className="product-image"
          style={{ position: 'relative' }}
          alt={title}
        />
        {discountInPercent ? (
          <>
            <DiscountPercent>{discountInPercent}%</DiscountPercent>
          </>
        ) : (
          ''
        )}
      </BookImageWrapper>
      <BookInfo>
        <ProductName>{title}</ProductName>
        <AuthorInfo>
          <FormattedMessage id="intlTextBy" defaultMessage="by" /> {name}
        </AuthorInfo>
      </BookInfo>
    </BookCardWrapper>
  );
};

export default ProductCard;
