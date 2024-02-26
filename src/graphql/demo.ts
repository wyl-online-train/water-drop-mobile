import { gql } from "@apollo/client";

export const FIND = gql`
  query findById($id: String!) {
    find(id: $id) {
      name
      desc
      id
    }
  }
`;

export const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;
