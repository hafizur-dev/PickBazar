import React from 'react';
import { styled, withStyle } from 'baseui';
import { Col } from '../../FlexBox/FlexBox';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Wrapper, Header, Heading } from '../../WrapperStyle';

import {
  StyledTable,
  StyledHead as BaseStyledHead,
  StyledHeadCell as BaseStyledHeadCell,
  StyledBody as BaseStyledBody,
  StyledRow,
  StyledCell as BaseStyledCell,
} from 'baseui/table';

const GET_PRODUCTS = gql`
  {
    products {
      id
      image
      name
      type
      # views
      # sales
      price
    }
  }
`;

const ImageWrapper = styled('div', ({ $theme }) => ({
  width: '40px',
  height: '40px',
  overflow: 'hidden',
  display: 'inline-block',
  borderRadius: '20px',
  backgroundColor: $theme.colors.backgroundF7,
}));

const Image = styled('img', () => ({
  width: '100%',
  height: 'auto',
}));

const TableWrapper = styled('div', () => ({
  width: '100%',
  height: '510px',
  padding: '0 25px 25px',
}));

const StyledHead = withStyle(BaseStyledHead, () => ({
  width: '100%',

  '@media only screen and (max-width: 767px)': {
    width: '1000px',
  },
}));

const StyledBody = withStyle(BaseStyledBody, () => ({
  width: '100%',

  '@media only screen and (max-width: 767px)': {
    width: '1000px',
  },
}));

const StyledHeadCell = withStyle(BaseStyledHeadCell, () => ({
  fontFamily: "'Lato', sans-serif",
  fontWeight: 700,
  color: '#161F6A !important',
}));

const SmallHeadCell = withStyle(StyledHeadCell, () => ({
  maxWidth: '70px',
}));

const StyledCell = withStyle(BaseStyledCell, () => ({
  fontFamily: "'Lato', sans-serif",
  fontWeight: 400,
  color: '#161F6A !important',
}));

const SmallCell = withStyle(StyledCell, () => ({
  maxWidth: '70px',
}));

export default function Products() {
  const { data, error } = useQuery(GET_PRODUCTS);
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <Wrapper>
      <Header style={{ padding: '25px 10px' }}>
        <Col md={12}>
          <Heading>Products</Heading>
        </Col>
      </Header>

      <TableWrapper>
        <StyledTable>
          <StyledHead $width='100%'>
            <SmallHeadCell>ID</SmallHeadCell>
            <SmallHeadCell>Image</SmallHeadCell>
            <StyledHeadCell>Name</StyledHeadCell>
            <StyledHeadCell>Type</StyledHeadCell>
            <StyledHeadCell>Price</StyledHeadCell>
          </StyledHead>
          <StyledBody $width='100%'>
            {data &&
              data.products
                .map(item => Object.values(item))
                .map((row, index) => (
                  <StyledRow key={index}>
                    <SmallCell>{row[0]}</SmallCell>
                    <SmallCell>
                      <ImageWrapper>
                        <Image src={row[1]} alt={row[2]} />
                      </ImageWrapper>
                    </SmallCell>
                    <StyledCell>{row[2]}</StyledCell>
                    <StyledCell>{row[3]}</StyledCell>
                    <StyledCell>{row[4]}</StyledCell>
                  </StyledRow>
                ))}
          </StyledBody>
        </StyledTable>
      </TableWrapper>
    </Wrapper>
  );
}
