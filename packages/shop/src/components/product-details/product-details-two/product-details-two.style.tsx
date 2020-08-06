import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ProductDetailsWrapper = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  /* min-height: 800px; */
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;

export const ProductPreview = styled.div`
  width: 50%;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 990px) {
    padding: 30px 40px 60px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 30px 25px 60px;
  }
`;

export const BackButton = styled.div`
  position: absolute;
  top: 60px;
  left: 60px;
  z-index: 999;

  @media (max-width: 990px) {
    top: 20px;
    left: 25px;
  }
  .reusecore__button {
    font-family: ${themeGet('fonts.body', 'Lato')};
    font-size: ${themeGet('fontSizes.sm', '13')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.regular', '#77798C')};
    height: 30px;
    .btn-icon {
      margin-right: 5px;
    }
    .btn-text {
      padding: 0;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 50%;
  border-left: 1px solid ${themeGet('colors.gray.500', '#f1f1f1')};
  padding: 55px 60px;

  @media (max-width: 990px) {
    padding: 30px 40px;
  }
  @media (max-width: 767px) {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 30px 25px;
    border: 0;
  }
`;

export const SaleTag = styled.span`
  font-size: ${themeGet('fontSizes.xs', '12')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: ${themeGet('colors.yellow.alternate', '#f4c243')};
  padding: 0 10px;
  line-height: 24px;
  border-radius: ${themeGet('radii.medium', '12px')};
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const DiscountPercent = styled.span`
  font-size: ${themeGet('fontSizes.xs', '12')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  line-height: 24px;
  background-color: ${themeGet('colors.secondary.alternate', '#fc5c63')};
  padding-left: 20px;
  padding-right: 15px;
  position: relative;
  display: inline-block;
  position: absolute;
  bottom: 180px;
  right: -60px;

  &:before {
    content: '';
    position: absolute;
    left: -8px;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 12px 0;
    border-color: transparent
      ${themeGet('colors.secondary.alternate', '#fc5c63')} transparent
      transparent;
  }

  &:after {
    content: '';
    position: absolute;
    left: -8px;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 12px 8px;
    border-color: transparent transparent
      ${themeGet('colors.secondary.alternate', '#fc5c63')} transparent;
  }
`;

export const BookTitle = styled.h1`
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1.2;
  margin-bottom: 15px;
`;

export const AuthorName = styled.div`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const BookDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookDescription = styled.p`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.medium', '#424561')};
  line-height: 2;
  margin-top: 30px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

export const BookMetaTable = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const BookMetaTableRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BookMetaItem = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.medium', '#424561')};

  &:first-child {
    width: 200px;
    flex-shrink: 0;
  }

  &:last-child {
    width: 100%;
  }
`;

export const ProductCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductPrice = styled.div`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.md', '19')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.primary.regular', '#009E7F')};
`;

export const SalePrice = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.yellow.hover', '#FBB979')};
  font-style: italic;
  padding: 0 5px;
  overflow: hidden;
  margin-right: 15px;
  position: relative;
  display: flex;

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    display: inline-block;
    background-color: ${themeGet('colors.yellow.hover', '#FBB979')};
    position: absolute;
    top: 50%;
    left: 0;
  }
`;

export const ProductCartBtn = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;

  .cart-button {
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;

    .btn-icon {
      margin-right: 5px;

      svg {
        width: 14px;
        height: auto;
        @media (max-width: 990px) {
          width: 14px;
        }
      }
    }

    &.outline-button {
      margin-left: 20px;

      .btn-icon {
        svg {
          width: 16px;
        }
      }

      &:hover {
        color: ${themeGet('colors.primary.regular', '#009E7F')};

        svg {
          color: ${themeGet('colors.primary.regular', '#009E7F')};
        }
      }
    }
  }
  .quantity {
    width: 115px;
    height: 38px;
  }
`;

export const ButtonText = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ProductMeta = styled.div`
  margin-top: 60px;
`;

export const MetaSingle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MetaItem = styled.span`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  margin-right: 10px;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  padding: 0 15px;
  border-radius: ${themeGet('radii.base', '6px')};
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailsWrapper = styled.div`
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 60px 70px 0px;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }

  ${AuthorName} {
    margin-bottom: 20px;
  }

  @media (max-width: 990px) {
    padding: 60px 30px 0px;
  }
`;

export const DetailsTitle = styled.h3`
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-family: ${themeGet('fonts.body', 'Lato')};
  font-size: ${themeGet('fontSizes.base', '15')}px;
  font-weight: ${themeGet('fontWeights.regular', '400')};
  color: ${themeGet('colors.text.medium', '#424561')};
  line-height: 2;
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const SocialIcon = styled.span`
  width: auto;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  a {
    height: 100%;
  }

  svg {
    width: auto;
    height: 100%;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const RelatedItems = styled.div`
  margin-top: 70px;
  margin-left: 55px;
  margin-right: 55px;

  @media (max-width: 990px) {
    margin-top: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }
  > h2 {
    font-family: ${themeGet('fonts.heading', 'sans-serif')};
    font-size: ${themeGet('fontSizes.lg', '21')}px;
    font-weight: ${themeGet('fontWeights.bold', '700')};
    color: ${themeGet('colors.text.bold', '#0D1136')};
    line-height: 1.2;
    margin-left: 15px;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      margin-left: 0;
      margin-bottom: 25px;
    }
  }

  > div > div {
    flex: 0 0 20%;
    max-width: 20%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;

    @media (max-width: 1500px) {
      flex: 0 0 20%;
      max-width: 20%;
    }
    @media (max-width: 1400px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    @media (max-width: 1060px) {
      flex: 0 0 33.3333333%;
      max-width: 33.3333333%;
    }
    @media (max-width: 1199px) and (min-width: 991px) {
      padding-left: 10px;
      padding-right: 10px;
    }
    @media (max-width: 768px) {
      padding-left: 7.5px;
      padding-right: 7.5px;
      margin-bottom: 15px;
    }
    @media (max-width: 767px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
`;
