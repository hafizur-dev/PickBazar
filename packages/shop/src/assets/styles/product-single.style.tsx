import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ProductSingleWrapper = styled.div`
  padding: 78px 0 60px 0;
  position: relative;
  background-color: ${themeGet('colors.gray.200', '#f7f7f7')};

  @media (min-width: 1600px) {
    padding-top: 89px;
  }

  @media (max-width: 990px) {
    padding-top: 60px;
  }
`;

export const ProductSingleContainer = styled.div`
  width: 100%;
`;

export const RelatedItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  @media (max-width: 1199px) and (min-width: 990px) {
    margin-left: -10px;
    margin-right: -10px;
  }

  @media (max-width: 768px) {
    margin-left: -7.5px;
    margin-right: -7.5px;
  }
`;

export const RealatedItemCol = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;

  @media (max-width: 1500px) {
    flex: 0 0 20%;
    max-width: 20%;
  }
  @media (max-width: 1200px) {
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
`;

export const Loading = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${themeGet('fontSizes.base', '15px')} - 1px);
  color: #222222;
`;

export default ProductSingleWrapper;
