import gql from 'graphql-tag';

export const GET_VENDORS = gql`
  query getVendors(
    $type: String
    $text: String
    $category: String
    $offset: Int
    $limit: Int
  ) {
    vendors(
      type: $type
      text: $text
      category: $category
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        slug
        type
        categories
        name
        thumbnailUrl
        description
        promotion
        deliveryDetails {
          charge
          minimumOrder
          isFree
        }
      }
      totalCount
      hasMore
    }
  }
`;
