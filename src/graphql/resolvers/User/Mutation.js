/* eslint-disable no-console */
import { response } from '../interfaces';
import { modelUser } from '../../../utils/functions';
import { cacheIncr } from '../../../database/cache';

const msg = 'System Error, Failed ';

export const Mutation = {
  register: async (_, { input }, { models }) => {
    const resp = response('insert');
    let user = null;
    let referralInstance = null;
    let data = null;
    const transaction = await models.sequelize.transaction();
    try {
      // Insert user data to database
      data = await modelUser(input);
      user = await models.User.create(data, { transaction });
      if (!user) throw new Error(`${msg}(1)`);

      // Insert referrer if any
      const userReferralCode = input.referrer;
      if (userReferralCode) {
        const where = { where: { userReferralCode } };
        const checkUserRefCode = await models.User.findOne(where);
        if (!checkUserRefCode) throw new Error('Referral code not found');

        const newRefData = { referralUserId: user.id, referrerCode: userReferralCode };
        referralInstance = await models.Referral.create(newRefData, { transaction });
        if (!referralInstance) throw new Error(`${msg}(2)`);
      }
      await cacheIncr('user_count');
      resp.message = 'Registered successfully!';
      resp.payload = user;
      await transaction.commit();
    } catch (err) {
      resp.success = false;
      resp.message = err.message;
      await transaction.rollback();
    }
    return resp;
  },
};
export default {
  Mutation,
};
