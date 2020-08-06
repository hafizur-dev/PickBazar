import React from 'react';
import { themeGet } from '@styled-system/theme-get';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';

const SingleItem = styled.li`
  border: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  border-radius: ${themeGet('radii.base', '6px')};
  margin-right: 20px;
  padding: 0;
  outline: none;
  width: 70px;
  height: auto;
  overflow: hidden;

  &:last-child {
    margin-right: 0;
  }

  &.custom-dot--active {
    border: 2px solid ${themeGet('colors.primary.regular', '#009E7F')};
  }
`;
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200,
    },
    items: 1,
  },
};

const CarouselWithCustomDots = ({
  items = [],
  deviceType: { mobile, tablet, desktop },
  title,
  ...rest
}: any) => {
  const children = items.slice(0, 6).map((item: any, index: number) => (
    <img
      src={item.url}
      key={index}
      alt={title}
      style={{
        minWidth: 'auto',
        height: 'auto',
        position: 'relative',
        margin: 'auto',
      }}
      className='product-image'
    />
  ));
  const images = items.map((item: any, index: number) => (
    <img
      src={item.url}
      key={index}
      alt={title}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    />
  ));
  const CustomDot = ({
    index,
    onClick,
    active,
    carouselState: { currentSlide, deviceType },
  }: any) => {
    return (
      <SingleItem
        data-index={index}
        key={index}
        onClick={() => onClick()}
        className={`custom-dot ${active && 'custom-dot--active'}`}
      >
        {React.Children.toArray(images)[index]}
      </SingleItem>
    );
  };
  let deviceType = 'desktop';
  if (mobile) {
    deviceType = 'mobile';
  }
  if (tablet) {
    deviceType = 'tablet';
  }
  return (
    <Carousel
      showDots
      ssr
      infinite={true}
      slidesToSlide={1}
      containerClass='carousel-with-custom-dots'
      responsive={responsive}
      deviceType={deviceType}
      autoPlay={false}
      arrows={false}
      customDot={<CustomDot />}
      {...rest}
    >
      {children}
    </Carousel>
  );
};

export default CarouselWithCustomDots;
