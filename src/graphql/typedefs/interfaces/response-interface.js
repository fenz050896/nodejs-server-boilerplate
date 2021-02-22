import { gql } from 'apollo-server';

export default gql`
  interface ResponseInterface {
    success: Boolean!
    message: String!
  }
`;
