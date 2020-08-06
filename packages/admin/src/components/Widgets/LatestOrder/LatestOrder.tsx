import React, { useState } from 'react';
import dayjs from 'dayjs';
import { styled, withStyle, createThemedUseStyletron } from 'baseui';
import { Col as Column } from '../../../components/FlexBox/FlexBox';
import Input, { SIZE } from '../../Input/Input';

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

type CustomThemeT = { red400: string; textNormal: string; colors: any };
const themedUseStyletron = createThemedUseStyletron<CustomThemeT>();

const Status = styled('div', ({ $theme }) => ({
  ...$theme.typography.fontBold14,
  color: $theme.colors.textDark,
  display: 'flex',
  alignItems: 'center',
  lineHeight: '1',
  textTransform: 'capitalize',

  ':before': {
    content: '""',
    width: '10px',
    height: '10px',
    display: 'inline-block',
    borderRadius: '10px',
    backgroundColor: $theme.borders.borderE6,
    marginRight: '10px',
  },
}));

const Col = styled(Column, () => ({
  '@media only screen and (max-width: 767px)': {
    marginBottom: '20px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const TableWrapper = styled('div', () => ({
  width: '100%',
  height: '400px',
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

const GET_ORDERS = gql`
  query getOrders($status: String, $limit: Int, $searchText: String) {
    orders(status: $status, limit: $limit, searchText: $searchText) {
      id
      creation_date
      delivery_address
      amount
      payment_method
      contact_number
      status
      customer_id
    }
  }
`;

export default function Orders() {
  const [customer_id, setCustomerId] = useState('');
  const [search, setSearch] = useState([]);
  const [useCss, theme] = themedUseStyletron();
  const sent = useCss({
    ':before': {
      content: '""',
      backgroundColor: theme.colors.primary,
    },
  });
  const failed = useCss({
    ':before': {
      content: '""',
      backgroundColor: theme.colors.red400,
    },
  });
  const packing = useCss({
    ':before': {
      content: '""',
      backgroundColor: theme.colors.textNormal,
    },
  });
  const paid = useCss({
    ':before': {
      content: '""',
      backgroundColor: theme.colors.blue400,
    },
  });

  const { data, error, refetch } = useQuery(GET_ORDERS);
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  console.log(data && data.orders.map((item) => Object.values(item)));
  function handleSearch(event) {
    const { value } = event.currentTarget;
    setSearch(value);
    refetch({ searchText: value });
  }
  return (
    <Wrapper>
      <Header style={{ padding: '25px 10px' }}>
        <Col md={2}>
          <Heading>Orders</Heading>
        </Col>

        <Col md={10}>
          <Input
            value={search}
            size={SIZE.compact}
            placeholder="Quick Search"
            onChange={handleSearch}
            clearable
          />
        </Col>
      </Header>

      <TableWrapper>
        <StyledTable>
          <StyledHead $width="100%">
            <SmallHeadCell>Id</SmallHeadCell>
            <StyledHeadCell>Time</StyledHeadCell>
            <StyledHeadCell>Delivery Address</StyledHeadCell>
            <StyledHeadCell>Amount</StyledHeadCell>
            <StyledHeadCell>Payment Method</StyledHeadCell>
            <StyledHeadCell>Contact</StyledHeadCell>
            <StyledHeadCell>Status</StyledHeadCell>
          </StyledHead>
          <StyledBody $width="100%">
            {data &&
              data.orders
                .map((item) => Object.values(item))
                .map((row, index) => (
                  <StyledRow key={index}>
                    <SmallCell>{row[0]}</SmallCell>
                    <StyledCell>
                      {dayjs(row[1]).format('DD MMM YYYY')}
                    </StyledCell>
                    <StyledCell>{row[2]}</StyledCell>
                    <StyledCell>{row[3]}</StyledCell>
                    <StyledCell>{row[4]}</StyledCell>
                    <StyledCell>{row[5]}</StyledCell>
                    <StyledCell>
                      <Status
                        className={
                          row[6] === 1
                            ? sent
                            : row[6] === 2
                            ? paid
                            : row[6] === 3
                            ? packing
                            : row[6] === 4
                            ? failed
                            : ''
                        }
                      >
                        {row[6] === 1
                          ? 'sent'
                          : row[6] === 2
                          ? 'paid'
                          : row[6] === 3
                          ? 'packing'
                          : row[6] === 4
                          ? 'failed'
                          : ''}
                      </Status>
                    </StyledCell>
                  </StyledRow>
                ))}
          </StyledBody>
        </StyledTable>
      </TableWrapper>
    </Wrapper>
  );
}
