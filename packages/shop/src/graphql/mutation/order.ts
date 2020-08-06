import gql from 'graphql-tag';

export const ADD_ORDER = gql`
  mutation($orderInput: String!) {
    addOrder(orderInput: $orderInput) {
      id
      userId
      products {
        id
        title
      }
      status
    }
  }
`;

export const GET_PAYMENT = gql`
  mutation($paymentInput: String!) {
    charge(paymentInput: $paymentInput) {
      status
    }
  }
`;
