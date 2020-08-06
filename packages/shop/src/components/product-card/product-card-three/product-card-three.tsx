// product card for furniture
import React from 'react';
import Image from 'components/image/image';
import {
  ProductName,
  DiscountPercent,
  ProductCardWrapper,
  ProductImageWrapper,
  ProductInfo,
} from '../product-card.style';

type ProductCardProps = {
  title: string;
  image: any;
  discountInPercent?: number;
  onClick?: (e: any) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  discountInPercent,
  onClick,
}) => {
  return (
    <ProductCardWrapper onClick={onClick} className="furniture-card">
      <ProductImageWrapper>
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
      </ProductImageWrapper>
      <ProductInfo>
        <ProductName>{title}</ProductName>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
