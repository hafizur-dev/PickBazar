import gql from 'graphql-tag';

export const UPDATE_CONTACT = gql`
  mutation($contactInput: String!) {
    updateContact(contactInput: $contactInput) {
      id
      name
      contact {
        id
        type
        number
      }
    }
  }
`;
export const DELETE_CONTACT = gql`
  mutation($contactId: String!) {
    deleteContact(contactId: $contactId) {
      id
      name
      contact {
        id
        type
        number
      }
    }
  }
`;
