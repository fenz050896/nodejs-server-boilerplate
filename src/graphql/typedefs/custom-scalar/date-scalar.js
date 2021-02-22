import { GraphQLScalarType } from 'graphql';

export default {
  DateScalar: new GraphQLScalarType({
    name: 'DateScalar',
    description: 'Date custom scalar type',
    serialize(value) {
      return value ? new Date(value).toLocaleString() : null;
    },
  }),
};
