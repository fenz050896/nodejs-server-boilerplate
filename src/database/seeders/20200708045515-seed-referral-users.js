import { Op } from 'sequelize';
import { UserFactory } from '../factories';
import models from '../models';

export default {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const trans = await queryInterface.sequelize.transaction();
    try {
      const referral = await UserFactory(3)
      const inserted = await queryInterface.bulkInsert('Users', referral, {
        trans,
        returning: true,
      });
      const mappedIds = inserted.map((u) => u.id);
      const referrers = await models.User.findAll({
        where: {
          id: {
            [Op.notIn]: mappedIds,
          },
        },
      });
      const mappedReferrerCode = referrers.map((u) => u.userReferralCode);
      const len = mappedReferrerCode.length;
      const da = new Date();
      const insertToReferral = mappedIds.map((id) => ({
        referralUserId: id,
        referrerCode: mappedReferrerCode[Math.floor(Math.random() * len)],
        createdAt: da,
      }));

      await queryInterface.bulkInsert('Referrals', insertToReferral, { trans });
      await trans.commit();
    } catch (err) {
      await trans.rollback();
      throw err;
    }
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('Referrals', null, { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
