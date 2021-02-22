import { Mutation } from './Mutation';
import { Query } from './Query';

export default {
  Mutation,
  Query,
  User: {
    referrer: async (root, _, { loaders }) => {
      const r = root.id;
      return r ? loaders.UserLoader.referrer.load(r) : null;
    },
    referrals: (root, _, { loaders }) => {
      const r = root.userReferralCode;
      return r ? loaders.UserLoader.referrals.load(r) : null;
    },
  },
};
