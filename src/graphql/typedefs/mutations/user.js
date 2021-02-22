import { gql } from 'apollo-server';

export default gql`
  input UserRegister {
    email: String!
    password: String!
    phoneNumber: String
    address: String
    referrer: String
  }

  type UserRegisterResponse implements ResponseInterface {
    success: Boolean!
    message: String!
    payload: User
  }

  extend type Mutation {
    register(input: UserRegister!): UserRegisterResponse!
  }
`;
