import { response } from '../interfaces';

export const Query = {
  findUsers: async (_, { paginate }, { models }) => {
    const resp = response();
    try {
      const users = await models.User.findAll(paginate);
      const len = users.length;
      if (!len) throw new Error('Tidak ada data ditemukan');
      resp.payload = users;
    } catch (err) {
      resp.success = false;
      resp.message = err.message;
    }
    return resp;
  },
};
export default {
  Query,
};
