import gql from 'graphql-tag';

export const ADD_CARD = gql`
  mutation($addressInput: String!) {
    updateAddress(addressInput: $addressInput) {
      id
      name
      address {
        id
        name
        info
      }
    }
  }
`;
export const DELETE_CARD = gql`
  mutation($cardId: String!) {
    deletePaymentCard(cardId: $cardId) {
      id
      name
      address {
        id
        name
        info
      }
    }
  }
`;
