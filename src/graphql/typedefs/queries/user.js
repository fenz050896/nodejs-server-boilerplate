import { gql } from 'apollo-server';

export default gql`
  type User {
    id: Int
    email: String
    phoneNumber: String
    address: String
    userReferralCode: String
    referrer: User @cacheControl(maxAge: 28800)
    referrals: [User]
    deletedAt: DateScalar
    createdAt: DateScalar
    updatedAt: DateScalar
  }

  type UserQueryResponse implements ResponseInterface {
    success: Boolean!
    message: String!
    payload: [User]
  }

  extend type Query {
    findUsers(paginate: PaginationInput): UserQueryResponse!
  }
`;
