import { gql } from 'apollo-server';

import Interfaces from './interfaces';
import Queries from './queries';
import Mutations from './mutations';

const linkSchema = gql`
  scalar DateScalar

  input PaginationInput {
    limit: Int
    offset: Int
  }

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

const schemas = [
  linkSchema,
  Interfaces,
  Queries,
  Mutations,
].flat();

export default schemas;
